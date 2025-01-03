const { app, BrowserWindow } = require('electron');

app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 780,
    frame: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
    }
  });

  win.loadURL('https://oj.cppu.edu.cn/getaccount/clientpage/');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
