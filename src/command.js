#!/usr/bin/env node

// NOTE: this script will be used when the user attempts to use the CLI
const { program } = require('commander')
const clipboardy = require('clipboardy')

const getlocal = require('./index')
const package = require('../package.json')


program
	.version(package.version)
	.description(package.description)
	.usage('[options]')

program
	.option('-c, --copy', 'automatically copy local ip to clipboard')

program.parse(process.argv)

const options = program.opts()
const localip = getlocal()

console.log(localip)

if (options.copy) clipboardy.writeSync(localip)