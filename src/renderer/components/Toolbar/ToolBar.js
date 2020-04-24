// TODO: Toolbar
//    Uhrzeit, eine globale Suche, dropdown-menüs?, etc..

import React from "react";
import { Link } from "react-router-dom";
import "./ToolBar.css";

class Toolbar extends React.Component {
   render() {
      return (
         <React.Fragment>
            <div className="toolbar">
                 {/* <div className="profile">
                  <div className="profile_pic"></div>
               </div> */}
               <ul className="toolbar_list">
                  <li>
                     <Link to="/index.html?viewMain">Home</Link>
                  </li>
                  <li>
                     <Link to="/index.html?viewArtikel">Artikel</Link>
                  </li>
                  <li>About</li>
               </ul>
            </div>
         </React.Fragment>
      );
   }
}

export default Toolbar;
