import fs from 'fs/promises'
import path from 'path'

export const PATH_PROJECTS = 'C:\\Users\\royer\\OneDrive\\Escritorio\\PROJECTS'

export async function getFolders() {
  const files = await fs.readdir(PATH_PROJECTS);
  return files.filter(async (file) => {
    const stats = await fs.stat(path.join(PATH_PROJECTS, file));
    return stats.isDirectory();
  })
}