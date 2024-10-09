const fs = require('fs/promises')
const path = require ('path')
const folder = process.argv[2] ?? '.'

async function ls (folder) {

    let files
    try{
        files= await fs.readdir(folder)
    } catch {
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filespath = path.join(folder, file)
        try{
            const fileStats = await fs.stat(filePath)
        }catch {
            console.error(`No se pudo leer el directorio ${folder}`)
            process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.fileSize 
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
}) 

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

    ls(folder)