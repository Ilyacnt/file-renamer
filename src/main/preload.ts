import { ChannelsIPC } from './ipc/channels'

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    readFiles: (filePaths: string[]) => ipcRenderer.invoke(ChannelsIPC.filesReadChannel, filePaths),
    openDialog: () => ipcRenderer.invoke(ChannelsIPC.dialogOpenChannel),
})
