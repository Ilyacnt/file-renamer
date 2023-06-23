const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    // @ts-ignore
    electron: () => process.version.electron,
    ping: () => ipcRenderer.invoke('ping'),
})
