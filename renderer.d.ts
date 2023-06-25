import { IpcMainEvent } from 'electron'

export interface ElectronAPI {
    openFile: () => Promise<Buffer>
    handleCounter: (callback: CounterCallback) => Promise<void>
}

type CounterCallback = (event: IpcMainEvent, value: number) => void

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}
