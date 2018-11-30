const { app, BrowserView, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let win1
let win2
let win3

function createWindow () {

  win = new BrowserWindow({ width: 1600, height: 1000, webPreferences: { nodeIntegration: false }})
  //win.loadFile('index.html')

  // Create the browser window.
  //win = new BrowserWindow({ width: 1400, height: 1000, webPreferences: { nodeIntegration: false }})

  // and load the index.html of the app.
  //win.loadURL('https://pro.coinbase.com/trade/BTC-USD')

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  let winX = win.getPosition()[0]
  let winY = win.getPosition()[1] + 20

  win1 = new BrowserWindow({ width: 760, height: 1000, webPreferences: { nodeIntegration: false }, parent: win, frame: false})
  win1.loadURL('https://pro.coinbase.com/trade/BTC-USD')
  win1.setPosition(winX, winY)

  win2 = new BrowserWindow({ width: 400, height: 1000, webPreferences: { nodeIntegration: false }, parent: win, frame: false})
  win2.loadURL('https://pro.coinbase.com/trade/BTC-USD')
  win2.setPosition(winX + 760, winY)

  win3 = new BrowserWindow({ width: 400, height: 1000, webPreferences: { nodeIntegration: false }, parent: win, frame: false})
  win3.loadURL('https://pro.coinbase.com/trade/BTC-USD')
  win3.setPosition(winX + 1160, winY)

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
