import React from "react";
import "./SideBar.css";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

export default class Sidebar extends React.Component {
   constructor(props) {
      super(props);
      console.log("PROPS", props);

      // this.setState(props)
      this.state = {
         //    props : (props)
      };
   }

   render() {
      return (
         <React.Fragment>
            <div className="sidebar">
               <div className="sidebar_logo">
                  <img
                     src={process.env.PUBLIC_URL + "/img/logo/icon.svg"}
                     alt="error"
                  ></img>
               </div>

               <ul className="sidebar_navlist">
                  {this.props.links
                     ? this.props.links.map(link => (
                          <li key={link["name"]}>
                             <button key={link.name}>
                                {link.name}
                                <span className="badge badge-secondary">
                                   New
                                </span>
                             </button>
                          </li>
                       ))
                     : null}
               </ul>
            </div>
         </React.Fragment>
      );
   }
}
