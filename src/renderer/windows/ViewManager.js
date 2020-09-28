// QUESTION: "Views" besser einbinden?
// gibt es evtl. eine bessere Möglichkeit?
//    (soweit wie ich verstehe, muss jeglicher Inhalt
//     über eine "index.html" laufen)

// TODO: "View-Array"
//    -für mögliche spätere Verwaltung
//    entweder:   aus Ordner erstellen (dynamic)
//                in .json auslagern

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./main/main";
import Artikel from "./artikel/artikel";
import Test from "./Test";
import GNSSetup from "./GNS/GNS_setup";

class ViewManager extends Component {
   static Views() {
      return {
         viewMain: <Main />,
         viewArtikel: <Artikel />,
         viewGNSSetup: <GNSSetup />,
         viewTest: <Test />
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
            <Route path="/" component={ViewManager.View} />
         </Router>
      );
   }
}

export default ViewManager;
