export interface FileItem {
    id: string
    name: string
    size: string
    type: FileType
    blob: Blob
}

export type FileType = 'image' | 'video' | 'other'
