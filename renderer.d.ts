import { IpcMainEvent } from 'electron'

export interface ElectronAPI {
    openFile: () => Promise<Buffer>
    handleCounter: (callback: (event: IpcMainEvent, value: number) => void) => Promise<void>
}

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}
