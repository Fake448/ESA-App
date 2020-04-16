import React from "react";
const { ipcRenderer } = window.require("electron");

class GIV extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      console.log("GIV-props", props);
      console.log("GIV-state", this.state);
      };
   
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>GIV</h1>
            </div>
         </React.Fragment>
      );
   }
}

export default GIV;
