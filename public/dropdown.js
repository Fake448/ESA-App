// https://www.youtube.com/watch?v=QFW2o1GA60k

// fetching Data
// - https://dmitripavlutin.com/javascript-fetch-async-await/

class dropdown {
   /**
    * @desc
    *  test.
    *
    * @param evt
    *  test2
    */
   constructor(el_ID) {
      this.element = el_ID;
      this.dataFile = "./data.json";
   }

   /**
    * Illustrates line wrapping for long param/return descriptions.
    *
    * @param {string} foo This is a param with a description too long to fit in
    *     one line.
    * @return {number} This returns something that has a description too long to
    *     fit in one line.
    */
   init() {
      console.log("Init class... DropDown");
      this.readData().then((data) => (this.data = data));
      console.log("creating table");
      this.createTable();
   }

   // readData - async

   async readData() {
      console.log("reading Data from... ", this.dataFile);
      let res = await fetch(this.dataFile);
      let data = await res.json();
      console.log("data fetched :", data);
      return data;
   }

   // create Table
   createTable() {
      var table = document.createElement("table");
      var tbody = document.createElement("tbody");
      var el = document.getElementById(this.element);

      // adding System
      this.addRow(tbody, "System");
      this.addRow(tbody, "sfdsd");

      table.appendChild(tbody);
      el.appendChild(table);
   }

   // add Row
   addRow(table_body, name) {
      var tableRow = document.createElement("tr");
      var td_name = document.createElement("td");
      var td_dropdown = document.createElement("td");

      // rowName
      td_name.innerHTML = name;

      // rowDropdown
      this.addDropdown(td_dropdown, name);

      tableRow.appendChild(td_name);
      tableRow.appendChild(td_dropdown);
      table_body.appendChild(tableRow);
   }

   addDropdown(element, name) {
      var select = document.createElement("select");
      element.appendChild(select);
   }

   addList() {
      // var list = document.createElement("li")
   }
   //  startdropdown(data) {
   //     var mytable = document.createElement("table");
   //     var table_body = document.createElement("tbody");

   //     for (var key in data) {
   //        var tr = document.createElement("tr");
   //        var td_name = document.createElement("td");
   //        var td_dropdown = document.createElement("td");
   //        var select = document.createElement("select");

   //        // System
   //        td_name.innerHTML = key;
   //        select.id = key + "_select";

   //        mytable.append(table_body);
   //        table_body.append(tr);
   //        tr.append(td_name);
   //        tr.append(td_dropdown);
   //        td_dropdown.append(select);

   //        for (let i = 0; i < data.System.length; i++) {
   //           var option = document.createElement("option");
   //           option.value = data.System[i].Abk;
   //           option.innerHTML = data.System[i].Name;

   //           // console.log(data.System[i].Abk);
   //           // console.log(data.System[i].Name);
   //           select.appendChild(option);
   //        }
   //     }

   // document.getElementById("typ_table").append(mytable);
}

var dd = new dropdown("test");
dd.init();

