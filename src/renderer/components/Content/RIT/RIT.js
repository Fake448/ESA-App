import React from "react";
const { ipcRenderer } = window.require("electron");

class RIT extends React.Component {
   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>RIT</h1>
               <img
                  src={process.env.PUBLIC_URL + "/img/404.png"}
                  alt="error"
                  width="100%"
               ></img>
            </div>
         </React.Fragment>
      );
   }
}

export default RIT;
