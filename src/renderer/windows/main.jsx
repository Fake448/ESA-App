import React, { Component } from "react";
import ToolBar from "../components/Toolbar/ToolBar";
import SideBar from "../components/Sidebar/SideBar";
import Content from "../components/Content/Content";
import './main.css'
const { ipcRenderer } = window.require("electron");


// function Home () {
//    return (
//       <h1>Home</h1>
//    )
// }
// function GNS () {
//    return (
//       <h1>GNS 5.1</h1>
//    )
// }


class mainWindow extends Component {
   state = {};

   constructor(props) {
      super(props);
      
      ipcRenderer.on("receiveArtikelData", (e, parts) => {
         this.setState({ parts: parts });
      });
      
      
    }
    

   // EVENT HANDLING
   componentDidMount() {
      ipcRenderer.send("mainWindow:loaded");
   }

   //    RENDERING
   render() {
      return (
         <React.Fragment>
           <ToolBar />
            <div className="main_wrapper">
               <SideBar />
               <Content />
            </div>
         </React.Fragment>
      );
   }
}

export default mainWindow;
