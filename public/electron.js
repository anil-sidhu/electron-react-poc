const electron = require("electron");
const app = electron.app;
const Menu= electron.Menu
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1200, 
        height: 800,
        icon: ""
    });
     
console.warn("some ",`file://${path.join(__dirname, "../build/index.html")}`)

    mainWindow.loadURL(
        isDev
        ? `file://${path.join(__dirname, "../build/index.html")}`
        :`file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}
 
// const menu = Menu.buildFromTemplate([{
//     label: 'File',
//     submenu: [
//        { role: 'quit' }
//     ]
//   },])
// Menu.setApplicationMenu(menu)
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