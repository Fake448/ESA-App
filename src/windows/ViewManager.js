import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./mainWindow";
import Artikel from "./artikelWindow";

class ViewManager extends Component {
  static Views() {
    return {
      viewMain: <Main />,
      viewArtikel: <Artikel />
    };
  }

  static View(props) {
    let name = props.location.search.substr(1);
    let view = ViewManager.Views()[name];
    if (view == null) throw new Error("View '" + name + "' is undefined");
    return view;
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={ViewManager.View} />
        </React.Fragment>
      </Router>
    );
  }
}

export default ViewManager;
