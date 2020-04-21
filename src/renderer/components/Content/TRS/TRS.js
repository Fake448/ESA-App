import React from "react";
const { ipcRenderer } = window.require("electron");

class TRS extends React.Component {
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>TRS</h1>
            </div>
         </React.Fragment>
      );
   }
}

export default TRS;
