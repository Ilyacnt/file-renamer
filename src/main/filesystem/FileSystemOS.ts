import { FileItem } from '@/types/file'
import fs from 'fs/promises'
import { Stats } from 'original-fs'
import { FileTypeResult, fileTypeFromBuffer } from 'file-type'
import { v4 as uuidv4 } from 'uuid'
import { dialog } from 'electron'
import { extname } from 'path'

class FileSystemOS {
    constructor() {}

    async readFiles(filesPaths: string[]): Promise<FileItem[]> {
        let result: FileItem[] = []
        for (let path of filesPaths) {
            try {
                let file = await this.readFile(path)
                result.push(file)
            } catch (error: any) {
                throw new Error(error.message)
            }
        }
        return result
    }

    async readFile(filePath: string): Promise<FileItem> {
        try {
            let result
            const buffer: Buffer = await fs.readFile(filePath)
            const stats: Stats = await fs.stat(filePath)
            const fileName = filePath.split('/').pop() as string
            const fileSizeInBytes = stats.size
            const fileSizeInMegabytes = (fileSizeInBytes / (1024 * 1024)).toFixed(2) + 'MB'

            const fileExtension = extname(filePath).toLowerCase()

            let fileType: FileTypeResult | undefined
            if (fileExtension === '.txt') {
                // TS IGNORED BECAUSE LIBRARY DOESN'T SUPPORT TXT FORMAT
                //@ts-ignore
                fileType = { ext: 'txt', mime: 'text/plain' }
            } else {
                fileType = await fileTypeFromBuffer(buffer)
            }

            if (!fileType) throw new Error('Unable to read file type')
            result = {
                id: uuidv4(),
                name: fileName,
                size: fileSizeInMegabytes,
                type: fileType,
                pathToFile: filePath,
                // buffer,
            }
            return result
        } catch (error) {
            throw new Error('Unable to read file' + filePath)
        }
    }

    async openFileDialog(): Promise<string[] | null> {
        try {
            const result = await dialog.showOpenDialog({
                properties: ['openFile', 'multiSelections'],
            })
            if (!result.canceled && result.filePaths.length > 0) {
                return result.filePaths
            } else {
                return null
            }
        } catch (error) {
            throw new Error('Unable to open file dialog')
        }
    }
}

export const fileSystemOS = new FileSystemOS()
