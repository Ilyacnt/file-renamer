import { IpcMainEvent } from 'electron'

export interface ElectronAPI {
    readFiles: (filePaths: string[]) => Promise<FileItem[]>
    openDialog: () => Promise<string[] | null>
}

type CounterCallback = (event: IpcMainEvent, value: number) => void

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}
