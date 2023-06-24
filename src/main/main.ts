import { app, BrowserWindow, dialog, ipcMain, IpcMainInvokeEvent } from 'electron'
import path from 'path'
import { handleFileOpen } from './filesystem/FileSystem'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
    })

    ipcMain.handle('dialog:open', handleFileOpen)

    win.loadFile(path.resolve(__dirname, 'index.html'))
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
