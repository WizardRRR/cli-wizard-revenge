import inquirer from "inquirer"
import { getFolders } from "../../../utils/get-folder.js"
import openProject from "../../../utils/open-project-vscode-terminal.js"

export default async function openProjectEasyHotel() {

  const PATHNAME = process.env.WORK_WORKSPACE_PATHNAME

  if (!PATHNAME) return console.log(`Verifique que las variables de entorno esten configuradas!`)

  const folders = await getFolders(PATHNAME)

  const response = await inquirer.prompt([{
    type: 'list',
    name: 'project',
    message: `Lista de proyectos ${process.env.WORK_WORKSPACE}, ${process.env.USERNAME_APP} 
    Eliga uno para abrir workspace✅`,
    choices: folders,
  }])

  openProject(PATHNAME, response.project)
}