import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

console.log(process.cwd());

class artikelWindow extends Component {
   constructor(props) {
      super(props);

      ipcRenderer.on("sendingArtikelinfo", (e, part) => {
         this.setState({ part: part });
      });
   }

   componentDidMount() {
      ipcRenderer.send("artikelWindow:loaded");
   }

   render() {
      return (
         <React.Fragment>
            <h1>Artikel-Fenster</h1>
            <img
               src={process.env.PUBLIC_URL + "/img/404.png"}
               alt="error"
               width="100%"
            ></img>
         </React.Fragment>
      );
   }
}

export default artikelWindow;
