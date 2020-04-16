import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Main from "./main";
import Artikel from "./artikel";



class ViewManager extends Component {
  static Views() {
    return {
      viewMain: <Main />,
      viewArtikel: <Artikel />,
    };
  }

  static View(props) {
    let name = props.location.search.substr(1);
    let view = ViewManager.Views()[name];
    if (view == null) throw new Error("View '" + name + "' is undefined");
    // console.log(Route);
    return view;
  }

  

  render() {
    return (
      <Router>
          <Route path="/" component={ViewManager.View} />
          {/* <Route path="/viewMain"><Main /></Route> */}
          {/* <Route path="/Main"><Main /></Route> */}
          {/* <Route path="/Artikel"><Artikel /></Route> */}
      </Router>
    );
  }
}

export default ViewManager;
