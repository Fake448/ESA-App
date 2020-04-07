import React, { Component } from "react";
import Sidebar from '../components/SideBar'
import Header from "../components/Header";
import Content from "../components/Content";
const { ipcRenderer } = window.require("electron");

class mainWindow extends Component {
  state = {};
  
  constructor(props) {
    super(props);
    ipcRenderer.on("receiveArtikelData", (e, parts) => {
      this.setState({ parts: parts });
    });
  }

  //   EVENT HANDLING
  componentDidMount() {
    ipcRenderer.send("mainWindow:loaded");
  }

  //    RENDERING
  render() {

    return (
      <React.Fragment>
        <Header />
        <div className="container">
        <Sidebar />
        <Content />
        </div>
      </React.Fragment>
    );
  }
}

export default mainWindow;
