const { contextBridge } = require('electron')

contextBridge.exposeInIsolatedWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.version.electron,
})
