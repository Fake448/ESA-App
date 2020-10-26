// https://www.youtube.com/watch?v=QFW2o1GA60k

// fetching Data
// - https://dmitripavlutin.com/javascript-fetch-async-await/

class dropdown {
  constructor(elementID) {
   //  this.data = this.getData();
   //  this.data = this.readData()
    this.data = this.readData()
    this.element = elementID;

  }

  init() {
    this.createTable();
  }

  // readData();
  getData() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((jsondata) => {
        this.data = jsondata;
        console.log("getData :", this.data);
      });
  }

  async readData() {
    const response = await fetch("./data.json");
    const d = await response.json()
    this.testData = d
   //  return d
  }

  createTable() {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    // adding System
    this.addRow(tbody, "System");
    this.addRow(tbody, "sfdsd");

    console.log("here", this.data);

    table.appendChild(tbody);
    document.getElementById(this.element).appendChild(table);
  }

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

  test() {
    console.log("test");
  }

  //  startdropdown(data) {
  //     console.log("dsfsdgksdglk");
  //     console.log(data);
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

// Read local File

var dd = new dropdown("TypSchluessel_Feld");
dd.init();
