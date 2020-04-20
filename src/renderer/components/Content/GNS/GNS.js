import React from "react";
const { ipcRenderer } = window.require("electron");

class GNS extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      this.state = {
         baureihe: [
            {
               name: "Leistungsschalter",
               symbol: "LS"
            },
            {
               name: "Modulplattentechnik",
               symbol: ""
            },
            {
               name:
                  "Reihenschaltschrank für NH-Sicherungslasttrennschalter und Modulplatten in Festeinbauund Stecktechnik bis 630 A",
               symbol: ""
            },
            {
               name: "Motor Control Center",
               symbol: "MCC"
            },
            {
               name:
                  "Reihenschaltschrank für senkrechte NH-Sicherungslastschaltleisten bis 1250 A",
               symbol: "MCC"
            },
            {
               name: "Blindleistungskompensation",
               symbol: "MCC"
            }
         ],
         infos: [
            {
               name: "Bemessungsbetriebsspannung Ue",
               value: "AC 690 V"
            },
            {
               name: "Bemessungsfrequenz",
               value: "bis 60 Hz"
            },
            {
               name: "Bemessungsstoßspannungsfestigkeit",
               value: "8 kV"
            },
            {
               name: "Bemessungsisolationsspannung Ui",
               value: "1 kV"
            },
            {
               name: "Überspannungskategorie",
               value: "III"
            },
            {
               name: "Verschmutzungsgrad",
               value: "3"
            },
            {
               name: "Schutzgrad nach IEC 60529",
               value: "max. IP41"
            },
            {
               name: "Schutzklasse",
               value: "I"
            },
            {
               name: "Innere Unterteilung",
               value:
                  "Gerüstrahmen – Alu-Zink beschichtet Innere Unterteilung – Alu-Zink beschichtet Umhüllung – Pulverbeschichtet RAL 7035 (Standard)"
            },
            {
               name: "Rastergrundmaß",
               value: "25 mm = 1E nach DIN43660"
            },
            {
               name: "",
               value: ""
            },
            {
               name: "",
               value: ""
            },
            {
               name: "",
               value: ""
            },
            {
               name: "",
               value: ""
            },
            {
               name: "",
               value: ""
            }
         ]
      };

      ipcRenderer.on("receiveArtikelData", (e, parts) => {
         this.setState({
            parts: parts
         });
      });
   }
   handleClick = e => {
      ipcRenderer.send("part:clicked", e.currentTarget.id);
   };

   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>GNS (ver. 5.1)</h1>
               <img
                  src={process.env.PUBLIC_URL + "/img/GNS/GNS-komplett.png"}
                  alt="error"
                  width="400"
               ></img>
               <h4> Parts: </h4>
               <ul className="parts">
                  {this.state.parts
                     ? this.state.parts.map(part => (
                          <li key={part["name"]}>
                             <button
                                onClick={this.handleClick}
                                id={part["name"]}
                             >
                                View
                             </button>
                             <p
                                style={{
                                   paddingLeft: "10px",
                                   display: "inline-block"
                                }}
                             >
                                {part["name"]}
                             </p>
                          </li>
                       ))
                     : null}
               </ul>
            </div>
         </React.Fragment>
      );
   }
}

export default GNS;
