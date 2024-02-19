import { program } from 'commander'

export default function create() {
  program
    .command('create')
    .description('Crear un nuevo proyecto')
    .option('-n, --name <name>', 'Nombre del proyecto a crear')
    .action(() => console.log("creando un proyecto..."))
}