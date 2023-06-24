export interface ElectronAPI {
    openFile: () => Promise<string>
}

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}
