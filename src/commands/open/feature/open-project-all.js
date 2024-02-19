import inquirer from 'inquirer'

import { getFolders } from '../../../utils/get-folder.js'
import openProject from '../../../utils/open-project-vscode-terminal.js'

export default async function openProjectAll() {
  const PATHNAME = process.env.PERSONAL_WORKSPACE_PATHNAME

  if (!PATHNAME) return console.error(
    `ERROR: Variables de entorno \n>>>>>  ${process.env.PERSONAL_WORKSPACE} no configurada! 🤨`
  )

  const folders = await getFolders(PATHNAME)

  const response = await inquirer.prompt([{
    type: 'rawlist',
    name: 'project',
    message: `Proyectos tipo ${process.env.PERSONAL_WORKSPACE} - (${folders.length}) 👁️:`,
    choices: folders,
  }])

  openProject(PATHNAME, response.project)
}