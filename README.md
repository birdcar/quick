# Quick

A CLI to automate the creation of a GitHub Action.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g quick
$ quick COMMAND
running command...
$ quick (--version)
quick/0.0.0 darwin-arm64 node-v16.15.1
$ quick --help [COMMAND]
USAGE
  $ quick COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`quick create [ACTION_SLUG]`](#quick-create-action_slug)
* [`quick help [COMMAND]`](#quick-help-command)
* [`quick plugins`](#quick-plugins)
* [`quick plugins:install PLUGIN...`](#quick-pluginsinstall-plugin)
* [`quick plugins:inspect PLUGIN...`](#quick-pluginsinspect-plugin)
* [`quick plugins:install PLUGIN...`](#quick-pluginsinstall-plugin-1)
* [`quick plugins:link PLUGIN`](#quick-pluginslink-plugin)
* [`quick plugins:uninstall PLUGIN...`](#quick-pluginsuninstall-plugin)
* [`quick plugins:uninstall PLUGIN...`](#quick-pluginsuninstall-plugin-1)
* [`quick plugins:uninstall PLUGIN...`](#quick-pluginsuninstall-plugin-2)
* [`quick plugins update`](#quick-plugins-update)

## `quick create [ACTION_SLUG]`

Create a new GitHub Action

```
USAGE
  $ quick create [ACTION_SLUG] -a <value> -e <value> [-c]

FLAGS
  -a, --authorName=<value>   (required) The given name of the author
  -c, --composite            Generate a composite rather than a Node action
  -e, --authorEmail=<value>  (required) The public email of the author

DESCRIPTION
  Create a new GitHub Action

EXAMPLES
  $ quick create add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"

  $ quick create add_to_project -c --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"

  $ quick create add_to_project --composite --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"

  $ quick create add_to_project --authorName="Mona Octocat" --authorEmail="mona.octocat@example.com"
```

_See code: [dist/commands/create.ts](https://github.com/birdcar/quick/blob/v0.0.0/dist/commands/create.ts)_

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

## `quick plugins`

List installed plugins.

```
USAGE
  $ quick plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ quick plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `quick plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ quick plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ quick plugins add

EXAMPLES
  $ quick plugins:install myplugin 

  $ quick plugins:install https://github.com/someuser/someplugin

  $ quick plugins:install someuser/someplugin
```

## `quick plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ quick plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ quick plugins:inspect myplugin
```

## `quick plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ quick plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ quick plugins add

EXAMPLES
  $ quick plugins:install myplugin 

  $ quick plugins:install https://github.com/someuser/someplugin

  $ quick plugins:install someuser/someplugin
```

## `quick plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ quick plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ quick plugins:link myplugin
```

## `quick plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ quick plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ quick plugins unlink
  $ quick plugins remove
```

## `quick plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ quick plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ quick plugins unlink
  $ quick plugins remove
```

## `quick plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ quick plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ quick plugins unlink
  $ quick plugins remove
```

## `quick plugins update`

Update installed plugins.

```
USAGE
  $ quick plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
