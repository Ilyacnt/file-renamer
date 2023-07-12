import { app, BrowserWindow, globalShortcut, ipcMain, Menu } from 'electron'
import path from 'path'
import { ipcMainController } from './ipc/IPCMainController'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 670,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            devTools: true,
        },
    })

    const menu = Menu.buildFromTemplate([
        {
            label: app.name,
            submenu: [
                {
                    label: 'DevTools',
                    click: () => win.webContents.openDevTools(),
                },
            ],
        },
    ])
    Menu.setApplicationMenu(menu)

    ipcMainController.registerListeners()
    win.on('ready-to-show', () => win.webContents.openDevTools())
    win.loadFile(path.resolve(__dirname, 'index.html'))
}

app.whenReady().then(() => {
    createWindow()

    ipcMain.on('counter-value', (_event, value) => {
        console.log(value)
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    globalShortcut.register('CmdOrCtrl+Q', () => {
        app.quit()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
