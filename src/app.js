#!/usr/bin/env node
import { program } from 'commander'
import { openProject } from './options/index.js'

function main() {
  program
    .option('-o | --open [project]', 'Abrir un proyecto 😎')
    .parse(process.argv)

  const options = program.opts()

  if (options.open) openProject()
  else program.outputHelp()
}

main()