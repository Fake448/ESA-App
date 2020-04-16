import React from "react";
import {Link} from "react-router-dom"
import "./ToolBar.css";


class Toolbar extends React.Component {
   render() {
      return (
         <React.Fragment>
            <div className="toolbar">
               <div></div>
               <div className="toolbar_logo"></div>
                  <ul className="toolbar_list">
                     <li>
                        <Link to='/index.html?viewMain'>Home</Link>
                     </li>
                     <li>
                        <Link to='/index.html?viewArtikel'>Artikel</Link>
                     </li>
                     <li>About</li>
                  </ul>
               </div>
         </React.Fragment>
      );
   }
}

export default Toolbar;
