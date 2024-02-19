import { program } from 'commander'
import OPTIONS from './options.json' assert { type: 'json' }

// features
import {
  openProjectName,
  openProjectGithub,
  openProjectLocal,
  openProjectAll,
  openProjectEasyHotel,
} from './feature/index.js'

function handleAction() {
  const { project, github, local, easyHotel } = this.opts()

  if (project) openProjectName(project)
  else if (github) openProjectGithub()
  else if (local) openProjectLocal()
  else if (easyHotel) openProjectEasyHotel()
  else openProjectAll()
}

export default function open() {
  program
    .command('open')
    .description('Abrir un proyecto existente')
    .option(OPTIONS.project.flag, OPTIONS.project.description)
    .option(OPTIONS.github.flag, OPTIONS.github.description)
    .option(OPTIONS.local.flag, OPTIONS.local.description)
    .option(OPTIONS.easyHotel.flag, OPTIONS.easyHotel.description)
    .action(handleAction)
}