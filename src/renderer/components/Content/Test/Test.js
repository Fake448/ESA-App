import React from "react";
const { ipcRenderer } = window.require("electron");

class Test extends React.Component {
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>Test</h1>
            </div>
         </React.Fragment>
      );
   }
}

export default Test;
