const { app, BrowserWindow } = require("electron");
const path = require("path");

let MainWindow;

//  Setup     DEVELOP - Environment
const devPath = "http://localhost:3000?";
const prodPath = `file://${path.join(__dirname, "../build/index.html?")}`; // REACT-Entry

const myWindows = {
   Main: {
      name: "viewMain",
      width: 1200,
      height: 1000,
      url: "viewMain",
      webPreferences: {
         nodeIntegration: true,
      },
   },
   Artikel: {
      name: "vieArtikel",
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
      },
   },
};

class WinManager {
   // createWindow() {
   //    console.log("Window created");
   //       MainWindow = new BrowserWindow({
   //          width: 1200,
   //          height: 1000,
   //          webPreferences: {
   //             nodeIntegration: true,
   //          },
   //       });

   // MainWindow.loadURL(
   //    isDev
   //       ? devPath + "viewMain"
   //       : `file://${path.join(__dirname, "../build/index.html?viewMain")}`
   // );

   // // Dev-Extras (open-Dev-Tools)
   // if (isDev) {
   //    MainWindow.webContents.openDevTools();
   // }

   // // installing REACT-DEV-TOOLs
   // const {
   //    default: installExtension,
   //    REACT_DEVELOPER_TOOLS,
   // } = require("electron-devtools-installer");

   // installExtension(REACT_DEVELOPER_TOOLS)
   //    .then((name) => {
   //       console.log("added Extension: REACT_DEVELOPER_TOOLS");
   //    })
   //    .catch((err) => {
   //       console.log(err);
   //    });
   // }

   test() {
      console.log("foo")
      return    
   }
}

module.exports = WinManager;
