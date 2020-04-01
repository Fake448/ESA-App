const { app, BrowserWindow } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")
const prepareNext = require('electron-next')
const { format } = require('url')
const { resolve } = require('app-root-path')

  
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const devPath = 'http://localhost:3000'

  const prodPath = format({
    pathname: resolve('renderer/out/start/index.html'),
    protocol: 'file',
    slashes: true
  })
  const prodPath_old = `file://${path.join(__dirname, "../build/index.html")}`

  mainWindow.loadURL(isDev ? devPath : prodPath_old)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('ready', async () => {
  // await prepareNext('./renderer')
  createWindow();
})

