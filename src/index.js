// Das eist eine der Möglichkeiten, welche ich gefunden habe,
// um die jeweiligen 'window'-views anzuzeigen
//   (Ziel war es jedes Fenster mit SEINER "start.js" zu hinterlegen)
//       ViewManager.js als Handler

// TODO: setup REDUX
//    müsste doch hier eingebunden werden?

import React from "react";
import ReactDOM from "react-dom";
import ViewManager from "./renderer/windows/ViewManager";
import "./index.css";

ReactDOM.render(<ViewManager />, document.getElementById("root"));
