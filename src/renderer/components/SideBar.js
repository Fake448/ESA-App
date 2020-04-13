import React from "react";

const style = {
  background: "linear-gradient(to right bottom, #ffffff, #0081ff)",
  height: "100vh",
  width: "100px",
  padding: "0",
};





export default class Sidebar extends React.Component {
   render() {
      return (
         <React.Fragment>
            <div className="sidebar" style={style}>
               <ul>
                  <li>Home</li>
                  <li>GIV</li>
                  <li>GNS</li>
                  <li>Elektrant</li>
               </ul>
            </div>
         </React.Fragment>
      );
   }
}
