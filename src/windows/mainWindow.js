import React, { Component } from "react";
import Layout from "../windows/layout"

const { ipcRenderer } = window.require("electron");

class mainWindow extends Component {
  state = {};
  
  constructor(props) {
    super(props);
    const component = this.state.component 
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
        <Layout />
      </React.Fragment>
    );
  }
}

export default mainWindow;
