export interface ElectronAPI {
    openFile: () => Promise<Buffer>
}

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}
