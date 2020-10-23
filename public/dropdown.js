// https://www.youtube.com/watch?v=QFW2o1GA60k

const data = {
  System: [
    {
      Name: "Grimmaer Niederspannung 3.1",
      Abk: "G31",
      default: false,
    },
    {
      Name: "Grimmaer Niederspannung 5.1",
      Abk: "G51",
      default: true,
    },
  ],
  Produktebene: [
    {
      Name: "Typfeld",
      Abk: "TF",
      default: true,
    },
    {
      Name: "Kalkulationsfeld",
      Abk: "KF",
      default: false,
    },
  ],
  Feldtyp: [
    {
      Name: "Leistungsschalter",
      Abk: "LS",
      default: true,
      Baureihe: [
        {
          Name: "Emax2 E1.2",
          Abk: "E12",
          default: true,
        },
        {
          Name: "Emax2 E2.2",
          Abk: "E22",
          default: false,
        },
        {
          Name: "Emax2 E4.2",
          Abk: "E42",
          default: false,
        },
        {
          Name: "Emax2 E6.2",
          Abk: "E62",
          default: false,
        },
        {
          Name: "Tmax T4",
          Abk: "T4",
          default: false,
        },
        {
          Name: "Tmax T5",
          Abk: "T5",
          default: false,
        },
        {
          Name: "Tmax T6",
          Abk: "T6",
          default: false,
        },
        {
          Name: "Tmax T7",
          Abk: "T7",
          default: false,
        },
      ],
    },
    {
      Name: "Sprungschaltleisten",
      Abk: "SLw",
      default: false,

      Baureihe: [
        {
          Name: "ABB",
          Abk: "ABB",
          default: true,
        },
        {
          Name: "Jean-Müller",
          Abk: "JM",
          default: false,
        },
      ],
    },
    {
      Name: "Sprungschaltleisten, senkrecht",
      Abk: "SLs",
      default: false,
    },
    {
      Name: "Modulplatten",
      Abk: "MP",
      default: false,
    },
    {
      Name: "Lastschaltleisten",
      Abk: "LL",
      default: false,
    },
    {
      Name: "Motor-Control-Center",
      Abk: "MC",
      default: false,
    },
    {
      Name: "Gebaudeinstallationsverteiler",
      Abk: "IV",
      default: false,
    },
    {
      Name: "Eckfeld",
      Abk: "EF",
      default: false,
    },
    {
      Name: "Kompensationsfeld",
      Abk: "KO",
      default: false,
    },
    {
      Name: "Leerfeld",
      Abk: "LF",
      default: false,
    },
  ],
};

var mytable = document.createElement("table");
var table_body = document.createElement("tbody");

console.log("data :", data);

for (var key in data) {
  var tr = document.createElement("tr");
  var td_name = document.createElement("td");
  var td_dropdown = document.createElement("td");
  var select = document.createElement("select");

  // System
  td_name.innerHTML = key;
  select.id = key + "_select";

  mytable.append(table_body);
  table_body.append(tr);
  tr.append(td_name);
  tr.append(td_dropdown);
  td_dropdown.append(select);

  for (let i = 0; i < data.System.length; i++) {
    var option = document.createElement("option");
    option.value = data.System[i].Abk;
    option.innerHTML = data.System[i].Name;

    console.log(data.System[i].Abk);
    console.log(data.System[i].Name);
    select.appendChild(option);
  }

}

document.getElementById("typ_table").append(mytable);
