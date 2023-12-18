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

  execSync(`${editor} ${projectPath}`)
  execSync(`wt -d ${projectPath}`)
}