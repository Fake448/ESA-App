import React from "react";
const { ipcRenderer } = window.require("electron");

class GNS extends React.Component {
   state = {};
   constructor(props) {
      super(props);
      console.log("GNS-props", props);
      console.log("GNS-state", this.state);

      ipcRenderer.on("receiveArtikelData", (e, parts) => {
         this.setState({
            parts: parts
         });
      });
   }
   handleClick = e => {
      ipcRenderer.send("part:clicked", e.currentTarget.id);
   };

   render() {
      return (
         <React.Fragment>
            <div className="content">
               <h1>GNS (ver. 5.1)</h1>
               <h4> Parts: </h4>
               <ul className="parts">
                  {this.state.parts
                     ? this.state.parts.map(part => (
                          <li key={part["name"]}>
                             <button
                                onClick={this.handleClick}
                                id={part["name"]}
                             >
                                View
                             </button>
                             <p
                                style={{
                                   paddingLeft: "10px",
                                   display: "inline-block"
                                }}
                             >
                                {part["name"]}
                             </p>
                          </li>
                       ))
                     : null}
               </ul>
            </div>
         </React.Fragment>
      );
   }
}

export default GNS;
