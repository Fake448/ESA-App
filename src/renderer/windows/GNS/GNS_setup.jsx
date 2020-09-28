import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

console.log(process.cwd());

class artikelWindow extends Component {
  
  render() {
    return (
      <React.Fragment>
         <div>Test</div>
      </React.Fragment>
    );
  }
}
// }

export default artikelWindow;