import slugify from 'slugify'
import * as path from 'node:path'
import * as fs from 'node:fs/promises'

import {Command, Flags} from '@oclif/core'
import {Environment, FileSystemLoader} from 'nunjucks'

import {ActionRequirement} from '../interfaces'
import {getGitInfo, parseRequirements} from '../parsers'

const loader = new FileSystemLoader(path.join(__dirname, '..', '..', 'templates'))
const env = new Environment(loader)

export default class Create extends Command {
  static description = 'Create a new GitHub Action in a subdirectory';

  static examples = [
    '<%= config.bin %> <%= command.id %> "Add to project"',
    '<%= config.bin %> <%= command.id %> "Add to project" --composite',
    '<%= config.bin %> <%= command.id %> add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"',
    '<%= config.bin %> <%= command.id %> add_to_project -g octocat',
    '<%= config.bin %> <%= command.id %> "Hello World" --description="greet someone and record the time" --inputs who-to-greet:"who to greet":true:"World" --outputs time:"The time we greeted you"',
  ];

  static flags = {
    authorEmail: Flags.string({
      char: 'e',
      description: 'The public email of the author (uses git config if not provided)',
    }),
    authorName: Flags.string({
      char: 'a',
      description: 'The given name of the author (uses git config if not provided)',
    }),
    composite: Flags.boolean({
      char: 'c',
      description: 'Generate a composite rather than a Node action',
      default: false,
    }),
    description: Flags.string({
      char: 'd',
      description: 'The description for the action',
    }),
    githubHandle: Flags.string({
      char: 'g',
      description: "The GitHub username of the author (uses origin remote if value isn't provided and remote is available)",
    }),
    inputs: Flags.string({
      char: 'i',
      description: 'The input values you want the action to take, if any (specified as `name:description:required:default`. Multiples are allowed).',
      multiple: true,
    }),
    outputs: Flags.string({
      char: 'o',
      description: 'The output values you want the action to return, if any (specified as `name:description:required:default`. Multiples are allowed).',
      multiple: true,
    }),
  };

  static args = [
    {
      name: 'name',
      description: "The name of the action you'd like to create (will be slugified)",
      required: true,
    },
  ];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Create)

    const name = slugify(args.name, {
      replacement: '_',
      lower: true,
      trim: true,
    })

    let inputs: ActionRequirement[] = []
    if (flags.inputs && flags.inputs.length > 0) {
      inputs = parseRequirements(flags.inputs)
    }

    let outputs: ActionRequirement[] = []
    if (flags.outputs && flags.outputs.length > 0) {
      outputs = parseRequirements(flags.outputs)
    }

    const context = {
      ...await getGitInfo(),
      ...args,
      ...flags,
      name,
      inputs,
      outputs,
    }

    const actionPath = path.join(process.cwd(), context.name)
    await fs.mkdir(actionPath)
    await fs.writeFile(path.join(actionPath, 'README.md'), env.render('README.md', context))
    await fs.writeFile(path.join(actionPath, 'action.yml'), env.render('action.yml', context))

    // If it's a JS action and not a composite action, also create my preferred TS files/folders
    if (!context.composite) {
      await fs.mkdir(path.join(actionPath, 'src'))
      await fs.mkdir(path.join(actionPath, 'src', 'interfaces'))
      await fs.mkdir(path.join(actionPath, 'src', 'types'))
      await fs.mkdir(path.join(actionPath, 'src', 'client'))
      await fs.mkdir(path.join(actionPath, 'src', 'parsers'))
      await fs.mkdir(path.join(actionPath, '__tests__'))
      await fs.writeFile(path.join(actionPath, '.gitignore'), env.render('.gitignore'))
      await fs.writeFile(path.join(actionPath, 'package.json'), env.render('package.json', context))
      await fs.writeFile(path.join(actionPath, 'tsconfig.json'), env.render('tsconfig.json', {}))
      await fs.writeFile(path.join(actionPath, 'src', 'index.ts'), '\n')
    }
  }
}
