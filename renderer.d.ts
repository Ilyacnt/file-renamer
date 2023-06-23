export interface VersionsApi {
    node: () => string,
    chrome: () => string,
    electron: () => string,
    ping: () => Promise<void>,
}

declare global {
    interface Window {
        versions: VersionsApi
    }
}
