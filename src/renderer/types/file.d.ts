import { FileTypeResult } from 'file-type'

export interface FileItem {
    id: string
    name: string
    size: string
    type: FileTypeResult
    blob?: Blob
}
