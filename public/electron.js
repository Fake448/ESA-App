const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");

let MainWindow;
let ArtikelWindow;
let TestWindow;

let currentID;

//  Setup     DEVELOP - Environment
const devPath = "http://localhost:3000?";
const prodPath = `file://${path.join(__dirname, "../build/index.html?")}`; // REACT-Entry

//  creating MAIN-Window
function createMainWindow() {
   MainWindow = new BrowserWindow({
      width: 1200,
      height: 1000,
      webPreferences: {
         nodeIntegration: true
      }
   });

   MainWindow.loadURL(
      isDev
         ? devPath + "viewMain"
         : `file://${path.join(__dirname, "../build/index.html?viewMain")}`
   );

   // 	DEV 	Extras
   if (isDev) {
      MainWindow.webContents.openDevTools();
   }

   const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS
   } = require("electron-devtools-installer");

   installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => {
         console.log("added Extension: REACT_DEVELOPER_TOOLS");
      })
      .catch(err => {
         console.log(err);
      });
}

ipcMain.on("mainWindow:loaded", () => {
   fs.readFile(process.cwd() + "/data/database.json", function(err, data) {
      if (err) throw err;
      const database = JSON.parse(data.toString());
      let mydata = [];
      database["Parts"].forEach((mypart, i) => {
         mydata.push({
            name: mypart["Name"] + " " + mypart["ArtNumber"],
            id: i
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

//  creating ARTIKEL-Window
function createArtikelWindow() {
   ArtikelWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
         nodeIntegration: true
      }
   });
   ArtikelWindow.loadURL(
      isDev
         ? devPath + "viewArtikel"
         : `file://${path.join(__dirname, "../build/index.html?viewArtikel")}`
   );
}

ipcMain.on("ArtikelWindow:loaded", () => {
   fs.readFile(process.cwd() + "/data/database.json", function(err, data) {
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
         nodeIntegration: true
      }
   });
   ArtikelWindow.loadURL(
      isDev
         ? devPath + "viewTest"
         : `file://${path.join(__dirname, "../build/index.html?viewTest")}`
   );
}

// SETTINGS Electron-App
app.whenReady().then(createMainWindow);

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
   console.log("App ready   -   ESA-Tool is loading");
});

//		HELPER functions
// function getDataBase() {
//    // Dies gibt alle Dateien die sich in Ihrem Root-Verzeichnis,
//    // befinden aus, '/' oder 'C:\'.
//    // const root = fs.readdirSync('/Games')
//    // console.log(root)

//    const files = require("fs");

//    var myDB = [];

//    files.readFile(__dirname + "/data/database.json", function(err, data) {
//       if (err) throw err;
//       const database = JSON.parse(data.toString());
//       database["Parts"].forEach((mypart, i) => {
//          myDB.push({
//             name: mypart["Name"],
//             ArtNr: mypart["ArtNumber"],
//             id: i
//          });
//       });
//       this.DB = myDB;
//    });

//    // console.log(this.DB);
//    // console.log(DB);

//    console.log(myDB);
//    return myDB;
// }
