import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

console.log(process.cwd());

class artikelWindow extends Component {
  // constructor(props) {
   //  super(props);
  }

  render() {
    return (
      <React.Fragment>
         Test
      </React.Fragment>
    );
  }
// }

export default artikelWindow;