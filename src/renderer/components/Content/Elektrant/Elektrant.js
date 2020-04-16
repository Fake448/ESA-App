import React from "react";
const { ipcRenderer } = window.require("electron");

class Elektrant extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      console.log("Elektrant-props", props);
      console.log("Elektrant-state", this.state);
      };
   
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>Elektrant</h1>
            </div>
         </React.Fragment>
      );
   }
}

export default Elektrant;
