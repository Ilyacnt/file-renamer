import { app, BrowserWindow, dialog, ipcMain, IpcMainInvokeEvent, Menu } from 'electron'
import path from 'path'
import { handleFileOpen } from './filesystem/FileSystem'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            devTools: true,
        },
    })

    ipcMain.handle('dialog:open', handleFileOpen)

    const menu = Menu.buildFromTemplate([
        {
            label: app.name,
            submenu: [
                {
                    label: 'Increment',
                    click: () => win.webContents.send('update-counter', 1),
                },
                {
                    label: 'Decrement',
                    click: () => win.webContents.send('update-counter', -1),
                },
            ],
        },
    ])

    Menu.setApplicationMenu(menu)
    win.loadFile(path.resolve(__dirname, 'index.html'))
}

app.whenReady().then(() => {
    createWindow()

    ipcMain.on('counter-value', (_event, value) => {
        console.log(value) // will print value to Node console
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
