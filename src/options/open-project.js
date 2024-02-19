import { execSync } from 'child_process'
import inquirer from 'inquirer'
import path from 'path'

import { PATH_PROJECTS, getFolders } from '../utils/get-folder.js'

export const openProject = async () => {

  const folders = await getFolders()

  const response = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Seleccion el proyecto que desea abrir:',
      choices: folders,
    },
  ])

  const projectPath = path.join(PATH_PROJECTS, response.project)
  const editor = 'code'

  execSync(`wt -d ${projectPath} --title "server" --tabColor "#dc143c"`)
  execSync(`wt -d ${projectPath} --title "client" --tabColor "#28B463"`)
  execSync(`wt -d ${projectPath} --title "commands" --tabColor "#8a2be2"`)
  execSync(`${editor} ${projectPath}`)
}