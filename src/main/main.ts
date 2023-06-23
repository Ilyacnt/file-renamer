const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
    })

    win.loadFile(path.resolve(__dirname, 'index.html'))
}

app.whenReady().then(() => {
    console.log(path.join(__dirname, '..', 'assets', 'TestImage.png'))
    ipcMain.handle('ping', () =>
        readImageFile(path.join(__dirname, '..', 'assets', 'TestImage.png'))
    )
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

function readImageFile(filePath: string) {
    const buffer = fs.readFileSync(filePath)
    const data = buffer.toString('base64')
    return data
}
