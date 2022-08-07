# Quick

A CLI to automate the creation of a GitHub Action.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/@birdcar/quick)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/@birdcar/quick)
[![License](https://img.shields.io/github/license/birdcar/quick)](https://github.com/birdcar/quick/blob/main/package.json)

<!-- toc -->
* [Quick](#quick)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @birdcar/quick
$ quick COMMAND
running command...
$ quick (--version)
@birdcar/quick/0.2.2 darwin-arm64 node-v16.15.1
$ quick --help [COMMAND]
USAGE
  $ quick COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`quick create NAME`](#quick-create-name)
* [`quick help [COMMAND]`](#quick-help-command)

## `quick create NAME`

Create a new GitHub Action in a subdirectory

```
USAGE
  $ quick create [NAME] [-e <value>] [-a <value>] [-c] [-d <value>] [-g <value>] [-i <value>] [-o <value>]

ARGUMENTS
  NAME  The name of the action you'd like to create (will be slugified)

FLAGS
  -a, --authorName=<value>    The given name of the author (uses git config if not provided)
  -c, --composite             Generate a composite rather than a Node action
  -d, --description=<value>   The description for the action
  -e, --authorEmail=<value>   The public email of the author (uses git config if not provided)
  -g, --githubHandle=<value>  The GitHub username of the author (uses origin remote if value isn't provided and remote
                              is available)
  -i, --inputs=<value>...     The input values you want the action to take, if any (specified as
                              `name:description:required:default`. Multiples are allowed).
  -o, --outputs=<value>...    The output values you want the action to return, if any (specified as
                              `name:description:required:default`. Multiples are allowed).

DESCRIPTION
  Create a new GitHub Action in a subdirectory

EXAMPLES
  $ quick create "Add to project"

  $ quick create "Add to project" --composite

  $ quick create add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"

  $ quick create add_to_project -g octocat

  $ quick create "Hello World" --description="greet someone and record the time" --inputs who-to-greet:"who to greet":true:"World" --outputs time:"The time we greeted you"
```

_See code: [dist/commands/create.ts](https://github.com/birdcar/quick/blob/v0.2.2/dist/commands/create.ts)_

## `quick help [COMMAND]`

Display help for quick.

```
USAGE
  $ quick help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for quick.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_
<!-- commandsstop -->
