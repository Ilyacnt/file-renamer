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

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => readImageFile(path.resolve(__dirname, 'assets', 'TestImage.png')))
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


function readImageFile(filePath) {
    const buffer = fs.readFileSync(filePath);
    const data = buffer.toString('base64');
    return data;
}