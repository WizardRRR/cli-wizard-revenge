import { program } from 'commander'

export default function help() {
  program
    .command('help')
    .description('Mostrar información de ayuda')
    .action(() => {
      program.outputHelp()
    })

}