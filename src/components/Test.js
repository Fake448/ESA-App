const fs = require("fs");

function getDataBase() {
	
	const DB = fs.readFile(__dirname + "/data/database.json", function(err, data) {
		if (err) throw err;
		let mydata = [];
      const datenbase = JSON.parse(data.toString());
      datenbase["Parts"].forEach((mypart, i) => {
         mydata.push({
				name: mypart["Name"],
				ArtNr: mypart["ArtNumber"],
            id: i,
         });
		});
	});
	
   return DB
}