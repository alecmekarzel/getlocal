#!/usr/bin/env node

// NOTE: this script will be used when the user attempts to use the CLI

const path = require('path')
const getlocal = require('./index')
const program = require('commander')
const package = require('../package.json')

const clipboardy = require('clipboardy')

program
	.version(package.version)
	.description(package.description)
	.usage('[options]')

program
	.option('-c, --copy', 'automatically copy local ip to clipboard')

program.parse(process.argv)

var localip = getlocal()

console.log(localip)
if (program.copy) clipboardy.writeSync(localip)
