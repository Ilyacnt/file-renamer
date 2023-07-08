import { FileItem } from '@/types/file'
import { IpcMainInvokeEvent, dialog } from 'electron'
import fs from 'fs/promises'
import { Stats } from 'original-fs'
import { FileTypeResult, fileTypeFromBuffer } from 'file-type'
import { v4 as uuidv4 } from 'uuid'

class FileSystemOS {
    files: FileItem[] = []

    constructor() {}

    async readFile(filePath: string): Promise<FileItem> {
        const buffer: Buffer = await fs.readFile(filePath)
        const stats: Stats = await fs.stat(filePath)
        const fileSizeInBytes = stats.size
        const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024) + 'MB'
        const fileType: FileTypeResult | undefined = await fileTypeFromBuffer(buffer)
        if (!fileType) throw new Error('Unable to read file type')

        return {
            id: uuidv4(),
            name: filePath.split('/').pop() as string,
            size: fileSizeInMegabytes,
            type: fileType,
            blob: new Blob([buffer]),
        }
    }
}

export const fileSystemOS = new FileSystemOS()

// export function readImageFile(filePath: string) {
//     const buffer = fs.readFileSync(filePath)
//     const data = buffer.toString('base64')
//     return data
// }

// export async function handleFileOpen() {
//     const { canceled, filePaths } = await dialog.showOpenDialog({})
//     if (!canceled) {
//         const result = await fs.promises.readFile(filePaths[0])
//         return result
//     }
// }
