import { FileTypeResult } from 'file-type'

export interface FileItem {
    id: string
    name: string
    size: string
    type: FileTypeResult
    pathToFile: string
    buffer?: Buffer
}
