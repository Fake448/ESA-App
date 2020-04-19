import React from "react";
import ListSeriesParameter from '../utils/ListSeriesParameter'
// const { ipcRenderer } = window.require("electron");

class Elektrant extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      this.state = {
         infos: [
            {
               name: "Energieanschlusssäulen",
               symbol: "ELK",
               bauform: [
                  {
                     name: "Elektrant AS",
                     symbol: "AS",
                     variante: [
                        {
                           name: "AS-11"
                        },
                        {
                           name: "AS-21"
                        },
                        {
                           name: "AS-31"
                        }
                     ]
                  },
                  {
                     name: "Elektrant ES",
                     symbol: "AS",
                     variante: [
                        {
                           name: "ES-11"
                        },
                        {
                           name: "ES-21"
                        },
                        {
                           name: "ES-31"
                        }
                     ]
                  }
               ]
            },
            {
               name: "Zähler- Wandler- und Energieverteilungen bis 1000 A",
               symbol: "ELK"
            }
         ]
      };
   }

   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>Elektrant</h1>
               <ListSeriesParameter infos={this.state.infos} />

            </div>
         </React.Fragment>
      );
   }
}

export default Elektrant;
