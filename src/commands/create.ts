import { Command, Flags } from "@oclif/core";

export default class Create extends Command {
  static description = "Create a new GitHub Action";

  static examples = [
    '<%= config.bin %> <%= command.id %> add_to_project',
    '<%= config.bin %> <%= command.id %> add_to_project -c',
    '<%= config.bin %> <%= command.id %> add_to_project --composite',
    '<%= config.bin %> <%= command.id %> add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"',
    '<%= config.bin %> <%= command.id %> add_to_project -g octocat',
  ];

  static flags = {
    composite: Flags.boolean({
      char: "c",
      description: "Generate a composite rather than a Node action",
      default: false,
    }),
    authorName: Flags.string({
      char: "a",
      description: "The given name of the author (uses git config if not provided)",
    }),
    authorEmail: Flags.string({
      char: "e",
      description: "The public email of the author (uses git config if not provided)",
    }),
    githubHandle: Flags.string({
      char: 'g',
      description: "The GitHub username of the author (uses origin remote if value isn't provided and remote is available)",
    }),
  };

  static args = [
    { name: "name", required: true },
    { name: "inputs" },
    { name: "outputs" },
  ];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Create);

    this.log(`Project name: ${args.name}`);

    if (flags.composite) {
      this.log(`you input --composite: ${flags.composite}`);
    }
  }
}
