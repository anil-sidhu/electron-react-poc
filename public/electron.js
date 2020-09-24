const electron = require("electron");
const app = electron.app;
const Menu= electron.Menu
const Notification=electron.Notification
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
// window.ipcRenderer = require('electron').ipcRenderer;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1200, 
        height: 800,
        icon: "",
        webPreferences: { webSecurity: false, nodeIntegration: true } 
    });
     
console.warn("some ",`file://${path.join(__dirname, "../build/index.html")}`)

    mainWindow.loadURL(
        isDev
        ? `http://localhost:3000/`
        :`file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}
 
// setTimeout(()=>{
//     notification = new Notification({title: "Message from: ",body: "messagebody"})
// notification.show()
// notification.on('click', (event, arg)=>{
//     mainWindow.moveTop()
//     mainWindow.focus()
// })
// },2000)

// const menu = Menu.buildFromTemplate([{
//     label: 'File',
//     submenu: [
//        { role: 'quit' }
//     ]
//   },])
// Menu.setApplicationMenu(menu)
// 
ipcMain.on('notiGet', (event, arg) => {
    console.warn("done in main file",arg) // prints "ping"
    setTimeout(()=>{
    notification = new Notification({title: "Message from: ",body: "messagebody"})
notification.show()
notification.on('click', (event, arg)=>{
    mainWindow.moveTop()
    mainWindow.focus()
})
},1000)
  }) 
// 
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
    createWindow();
    }
});