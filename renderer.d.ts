export interface ElectronAPI {
    setTitle: (string) => Promise<void>
}

declare global {
    interface Window {
        electronAPI: ElectronAPI
    }
}
