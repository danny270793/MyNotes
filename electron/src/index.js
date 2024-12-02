const { app, BrowserWindow, ipcMain } = require('electron')
const Path = require('node:path')

const isDebug = process.env.NODE_ENV === 'development'
const htmlPath = Path.join(__dirname, '..', 'www', 'index.html')

async function createWindow () {
  const window = new BrowserWindow({
    width: 600 + (isDebug ? 400 : 0),
    height: 800,
    webPreferences: {
      preload: Path.join(__dirname, 'preload.js')
    }
  })

  await window.loadFile(htmlPath)
  if (isDebug) {
    window.webContents.openDevTools()
  }
}

app.on('activate', async () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(() => {
  ipcMain.handle('htmlPath', () => htmlPath)
  createWindow()
})
