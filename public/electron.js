//    APP-INIT

// TODO: views.json
//    alle Setup-Angaben der "Window´s" in "views.json" auslagern

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const windowManager = require('electron-window-manager');
const fs = require("fs");
const { log } = require("console");

const WinManager = require('./winmanager.js')






let MainWindow;
let ArtikelWindow;
let TestWindow;

let createGNSBGConfigWindow;

let currentID;

//  Setup     DEVELOP - Environment
const devPath = "http://localhost:3000?";
const prodPath = `file://${path.join(__dirname, "../build/index.html?")}`; // REACT-Entry



initAllWindows();

function initAllWindows() {
   console.log("initializing all windows...");
  //  const allWindows = Object.entries(WinManager.myWindows);
  //  for (const window of allWindows) {
  //  }
}



// FUNCTIONS

// creating MAIN-Window
function createMainWindow() {
   MainWindow = new BrowserWindow({
      width: 1200,
      height: 1000,
      webPreferences: {
         nodeIntegration: true,
      },
   });

   MainWindow.loadURL(
      isDev
         ? devPath + "viewMain"
         : `file://${path.join(__dirname, "../build/index.html?viewMain")}`
   );

   // Dev-Extras (open-Dev-Tools)
   if (isDev) {
      MainWindow.webContents.openDevTools();
   }

   // installing REACT-DEV-TOOLs
   const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
   } = require("electron-devtools-installer");

   installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => {
         console.log("added Extension: REACT_DEVELOPER_TOOLS");
      })
      .catch((err) => {
         console.log(err);
      });
}

//    FIXME: mainwindow webcontent
//       "data" sollte von der main.js verwaltet werden
//       oder REDUX store

// Main-Window
ipcMain.on("mainWindow:loaded", () => {
   fs.readFile(process.cwd() + "/data/database.json", function (err, data) {
      if (err) throw err;
      const database = JSON.parse(data.toString());
      let mydata = [];
      database["Parts"].forEach((mypart, i) => {
         mydata.push({
            name: mypart["Name"] + " " + mypart["ArtNumber"],
            id: i,
         });
      });
      MainWindow.webContents.send("receiveArtikelData", mydata);
   });
});

ipcMain.on("part:clicked", (e, ID) => {
   currentID = ID;
   createArtikelWindow();
   // createTestlWindow();
});

ipcMain.on("openBG_Config", (e, ID) => {
   createGNSBGConfig();
});

//  creating ARTIKEL-Window
function createArtikelWindow() {
   ArtikelWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
      },
   });
   ArtikelWindow.loadURL(
      isDev
         ? devPath + "viewArtikel"
         : `file://${path.join(__dirname, "../build/index.html?viewArtikel")}`
   );
}

function createGNSBGConfig() {
   createGNSBGConfigWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
      },
   });
   createGNSBGConfigWindow.loadURL(
      isDev
         ? devPath + "viewGNSSetup"
         : `file://${path.join(__dirname, "../build/index.html?viewGNSSetup")}`
   );
}

ipcMain.on("ArtikelWindow:loaded", () => {
   fs.readFile(process.cwd() + "/data/database.json", function (err, data) {
      if (err) throw err;
      const artikelinfo = JSON.parse(data.toString());
      let part = artikelinfo["Parts"][currentID];
      console.log(part);
      ArtikelWindow.webContents.send("sendingArtikelinfo", part);
   });
});

//  creating TEST-Window
function createTestlWindow() {
   ArtikelWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true,
      },
   });
   ArtikelWindow.loadURL(
      isDev
         ? devPath + "viewTest"
         : `file://${path.join(__dirname, "../build/index.html?viewTest")}`
   );
}

// SETTINGS Electron-App
// app.whenReady().then(createMainWindow);
// app.whenReady().then(WinManager.createWindow("Main"));



app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
      app.quit();
   }
});

app.on("activate", () => {
   if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
   }
});

app.on("ready", () => {
   // TODO: electron-logger einrichten
   // evtl besseres "aktives loggen" durch Package-unterstützung
   //    .log datei sinnvoll
   windowManager.init()
   windowManager.setDefaultSetup({'width': 200, 'height': 450})

   windowManager.open('home', 'Welcome', '/home.html')
   
   
   console.log("App ready");
});
