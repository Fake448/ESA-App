import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./main/main";
import Artikel from "./artikel/artikel";
import Test from "./Test";


class ViewManager extends Component {
   

   static Views() {
      return {
         viewMain: <Main />,
         viewArtikel: <Artikel />,
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
