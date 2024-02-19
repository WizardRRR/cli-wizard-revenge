import fs from 'fs/promises'
import path from 'path'

export async function getFolders(pathname) {

  const files = await fs.readdir(pathname)
  
  return files.filter(async (file) => {
    const stats = await fs.stat(path.join(pathname, file))
    return stats.isDirectory();
  })
}