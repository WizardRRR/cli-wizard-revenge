import { execSync } from 'child_process'
import path from 'path'

export default function openProject(projectPath, nameProject) {
  
  const PATHNAME = path.join(projectPath, nameProject)

  execSync(`wt -d ${PATHNAME} --title "server" --tabColor "#dc143c"`)
  execSync(`wt -d ${PATHNAME} --title "client" --tabColor "#28B463"`)
  execSync(`wt -d ${PATHNAME} --title "commands" --tabColor "#8a2be2"`)
  execSync(`code ${PATHNAME}`)
}