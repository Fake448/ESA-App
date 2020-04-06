const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");

let MainWindow;
let ArtikelWindow;
let Datenbase;
let currentID;

//  Setup     DEVELOP - Environment
const devPath = "http://localhost:3000";

function getDataBase() {
	fs.readFile(__dirname + "/data/database.json", function(err, data) {
		if (err) throw err;
		data = JSON.parse(data.toString());
		return data;
	});
}

//  creating MAIN-Window

function createMainWindow() {
	Datenbase = getDataBase();
	MainWindow = new BrowserWindow({
		width: 600,
		height: 1000,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	MainWindow.loadURL(
		isDev
			? devPath + "?viewMain"
			: `file://${path.join(__dirname, "../build/index.html?viewMain")}`
	);
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
	fs.readFile(__dirname + "/data/database.json", function(err, data) {
		if (err) throw err;
		const datenbase = JSON.parse(data.toString());
		let mydata = [];
		datenbase["Parts"].forEach((mypart, i) => {
			mydata.push({
				name: mypart["Name"] + " " + mypart["ArtNumber"],
				id: i,
			});
		});
		MainWindow.webContents.send("receiveArtikelData", mydata);
	});
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
			? devPath + "?viewArtikel"
			: `file://${path.join(__dirname, "../build/index.html?viewArtikel")}`
	);
}

ipcMain.on("ArtikelWindow:loaded", () => {
	fs.readFile(__dirname + "/database.json", function(err, data) {
		if (err) throw err;
		const studentInfo = JSON.parse(data.toString());
		let part = studentInfo["Parts"][currentID];
		ArtikelWindow.webContents.send("receiveStudentInfo", part);
	});
});

ipcMain.on("part:clicked", (e, ID) => {
	currentID = ID;
	createArtikelWindow();
});

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

app.on("ready", () => {});
