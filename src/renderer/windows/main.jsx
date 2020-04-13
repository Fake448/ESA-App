import React, { Component } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import { findByLabelText } from "@testing-library/react";
const { ipcRenderer } = window.require("electron");


const mystyle = {
  background: "blue",
  display: "flex",
  height: "100%",
  width: "100px",
  padding: "0",
};



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
            <Header />
            <div id="wrapper" style={mystyle}>
               <SideBar />
               <Content />
            </div>
         </React.Fragment>
      );
   }
}

export default mainWindow;
