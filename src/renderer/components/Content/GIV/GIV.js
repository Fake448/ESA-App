import React from "react";
import ListSeriesParameter from '../utils/ListSeriesParameter'
// const { ipcRenderer } = window.require("electron");

class GIV extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      this.state = {
         infos: [
            {
               name: "Bemessungsspannungen",
               value: "690V"
            },
            {
               name: "Bemessungsisolationsspannung Ui",
               value: "690V"
            },
            {
               name: "Bemessungsspannungsfestigkeit Uimp",
               value: "6kV"
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
               name: "Bemessungsstrom",
               value: "bis 850A"
            },
            {
               name: "Bemessungsstoßstromfestigkeit Ipk",
               value: "bis 60 kA 3-polig, Stromflusszeit 30ms"
            },
            {
               name: "Bemessungskurzzeitstromfestigkeit Icw",
               value: "bis 20 kA, Stromflusszeit 1s"
            },
            {
               name: "Ausführungen nach",
               value: "DIN EN 61439-1/-3, VDE0660-600-1/-3 , DIN VDE 0603-1"
            },
            {
               name: "Schutzart nach DIN EN 60529",
               value:
                  "IP30 ohne Tür / mit Tür, bis IP54 mit Tür als Sonderausführung lieferbar"
            },
            {
               name: "Schutzklasse",
               value: "1 (geerdet)"
            },
            {
               name: "Gerüstteile",
               value: "verzinkter Bandstahl"
            },
            {
               name: "Verkleidung",
               value: "Farbanstrich RAL 7035, RAL- Sonderfarben lieferbar"
            },
            {
               name: "Anzahl der Leiter im Sammelschienenzug",
               value: "4 / 5"
            },
            {
               name: "Luft- und Kriechstrecken",
               value: "DIN VDE 0110-5"
            },
            {
               name: "Hutschienenreihenabstand pro Hutschiene",
               value: "150mm / 125mm"
            },
            {
               name: "Umgebungstemperatur",
               value: "35°C (24-h-Mittelwert)"
            },
            {
               name: "Relative Luftfeuchte",
               value: "50% bei 40°C"
            },
            {
               name: "Gehäuse",
               value: "Stahlblech"
            },
            {
               name: "Schließung",
               value: "Stangenverschluss mit 3mm Doppelbart / Schwenkhebel"
            },
            {
               name: "Türen",
               value: "bis 3 feldbreit mit Tür, ab 4 feldbreit mit Doppeltür, optional ohne Tür"
            },
            {
               name: "Türöffnungswinkel",
               value: "bei Reihenaufstellung 180°, bei Doppeltüren 135°"
            },
            {
               name: "Innenausbau",
               value: "nach DIN 43870"
            }
         ]
      };

   }

   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h3>Niederspannungs- Installationsverteiler GIV</h3>
               <ListSeriesParameter infos={this.state.infos} />
                  {/* {this.state.infos.map(info => (
                     <p key={info.name}>
                        {info.name} : {info.value}
                     </p>
                  ))} */}
            </div>
         </React.Fragment>
      );
   }
}

export default GIV;
