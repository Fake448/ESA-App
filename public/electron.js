const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");

let MainWindow;
let ArtikelWindow;
var DB = [];
let currentID;

//  Setup     DEVELOP - Environment
const devPath = "http://localhost:3000?";

function prodPath(myView) {
   const target = "../build/index.html?" + myView;

   // `file://${path.join(__dirname, "../build/index.html?viewMain")}`

   return target;
}

//  creating MAIN-Window
function createMainWindow() {
   MainWindow = new BrowserWindow({
      width: 800,
      height: 1000,
      webPreferences: {
         nodeIntegration: true,
      },
   });

   MainWindow.loadURL(isDev ? devPath + "viewMain" : prodPath("viewMain"));

   // 	DEV 	Extras
   MainWindow.webContents.openDevTools();
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

ipcMain.on("mainWindow:loaded", () => {
   const DB = getDataBase();
   const TmpDB = [
      {
         name: "abc",
         id: 1,
      },
      {
         name: "fdfsd",
         id: 2,
      },
   ];

   fs.readFile(__dirname + "/data/database.json", function(err, data) {
      if (err) throw err;
      const database = JSON.parse(data.toString());
      let mydata = [];
      database["Parts"].forEach((mypart, i) => {
         mydata.push({
            name: mypart["Name"] + " " + mypart["ArtNumber"],
            id: i,
         });
      });
      // console.log(mydata);

      MainWindow.webContents.send("receiveArtikelData", TmpDB);
   });
});

ipcMain.on("ArtikelWindow:loaded", () => {
   // DB = getmyDB();
   // console.log(DB);

   // fs.readFile(__dirname + "/database.json", function(err, data) {
      // if (err) throw err;
      // const studentInfo = JSON.parse(data.toString());
      // let part = studentInfo["Parts"][currentID];
      // ArtikelWindow.webContents.send("receiveStudentInfo", part);
   // });
});

ipcMain.on("part:clicked", (e, ID) => {
   currentID = ID;
   createArtikelWindow();
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
      isDev ? devPath + "viewArtikel" : prodPath("viewArtikel")
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
   console.log("ESA-Tool started");
});

//		HELPER functions

const MyDB = getmyDB();

function getmyDB() {
   const TmpDB = [
      {
         name: "abc",
         id: 1,
      },
      {
         name: "fdfsd",
         id: 2,
      },
   ];

   return TmpDB;
}

function getDataBase() {
   // Dies gibt alle Dateien die sich in Ihrem Root-Verzeichnis,
   // befinden aus, '/' oder 'C:\'.
   // const root = fs.readdirSync('/Games')
   // console.log(root)

   const files = require("fs");

   var myDB = [];
	
   files.readFile(__dirname + "/data/database.json", function(err, data) {
		if (err) throw err;
      const database = JSON.parse(data.toString());
      database["Parts"].forEach((mypart, i) => {
			myDB.push({
				name: mypart["Name"],
            ArtNr: mypart["ArtNumber"],
            id: i,
         });
      });
		this.DB = myDB
		
   });
	
	// console.log(this.DB);
	// console.log(DB);
	
	console.log(myDB);
   return myDB;
}
