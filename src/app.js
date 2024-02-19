#!/usr/bin/env node
import { program } from 'commander'
import { config } from 'dotenv'

import open from './commands/open/open.js'
import help from './commands/help/help.js'
import create from './commands/create/create.js'

config()

function main() {
  // commands
  program.version('Cli-Wizard: 0.1.0v')
  open()
  help()
  create()

  program.description('cli-wizard-repositories')

  program.parse(process.argv)
  if (!program.args.length) program.outputHelp()
}

main()
