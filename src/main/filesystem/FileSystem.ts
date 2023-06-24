import { IpcMainInvokeEvent, dialog } from 'electron'
import fs from 'fs'

export function readImageFile(filePath: string) {
    const buffer = fs.readFileSync(filePath)
    const data = buffer.toString('base64')
    return data
}

export async function handleFileOpen() {
    const { canceled, filePaths } = await dialog.showOpenDialog({})
    if (!canceled) {
        const result = await fs.promises.readFile(filePaths[0])
        return result
    }
}
