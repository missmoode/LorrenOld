import {app, BrowserWindow} from 'electron'
import path from 'path'

var window = null

var windows = [];

app.on('ready', () => {
  createWindow()
})


function createWindow() {
  var window = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    titleBarStyle: 'hiddenInset',
    title: 'Lorren',
    center: true,
    vibrancy: 'titlebar'
  })

  window.loadURL('file://' + path.join(__dirname, '../window/index.html'))

  window.on('closed', () => {
    window = null
  })

  windows.push(window)
}
