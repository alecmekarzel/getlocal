```
███████████████████████████████████████████████████████████
```

```
 █████  ██████   ██████ ██   ██ ██ ██    ██ ███████ ██████  
██   ██ ██   ██ ██      ██   ██ ██ ██    ██ ██      ██   ██ 
███████ ██████  ██      ███████ ██ ██    ██ █████   ██   ██ 
██   ██ ██   ██ ██      ██   ██ ██  ██  ██  ██      ██   ██ 
██   ██ ██   ██  ██████ ██   ██ ██   ████   ███████ ██████  
```

> *This project was built over seven years ago as a quick-use utility not meant for production purposes and has since been archived.*
>
> *However, feel free to peruse, fork, modify, and so forth!*

```
███████████████████████████████████████████████████████████
```

# getlocal

Quickly output (or copy to clipboard) your local IPv4 address.

This can be useful when spinning up a simple server you'd like to share across your local network (home router, etc.)

## Installation

```bash
# NPM
$ npm install getlocal
$ npm install getlocal -g

# Yarn
$ yarn add getlocal
$ yarn global add getlocal
```

## Getting Started

#### With CLI

```bash
# View Help
$ getlocal --help

# Basic Usage
$ getlocal [options]

# Basic Example
$ getlocal --copy
```

#### With Code

```js
const getlocal = require('getlocal')

var localip = getlocal()

console.log(localip)
```

## Testing

Simply run `npm test` or `yarn test` (depending on your package manager) and all of the tests in the `test/` directory will be run.

## Issues

We don't accept issues; we accept pull requests.

## Changelog

For milestones, visit the [project's releases](https://github.com/alecmekarzel/getlocal/releases).

## License

For license information, visit the [project's license](https://github.com/alecmekarzel/getlocal/blob/master/LICENSE).
