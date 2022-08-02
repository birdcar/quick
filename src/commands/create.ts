import { Command, Flags } from "@oclif/core";

export default class Create extends Command {
  static description = "Create a new GitHub Action";

  static examples = [
    '<%= config.bin %> <%= command.id %> add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"',
    '<%= config.bin %> <%= command.id %> add_to_project -c --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"',
    '<%= config.bin %> <%= command.id %> add_to_project --composite --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"',
    '<%= config.bin %> <%= command.id %> add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"',
  ];

  static flags = {
    composite: Flags.boolean({
      char: "c",
      description: "Generate a composite rather than a Node action",
      default: false,
    }),
    authorName: Flags.string({
      char: "a",
      description: "The given name of the author",
      required: true,
    }),
    authorEmail: Flags.string({
      char: "e",
      description: "The public email of the author",
      required: true,
    }),
  };

  static args = [{ name: "action_slug", required: true }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Create);

    this.log(`Project name: ${args.action_slug}`);

    if (flags.composite) {
      this.log(`you input --composite: ${flags.composite}`);
    }
  }
}
