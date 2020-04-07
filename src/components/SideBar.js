import React from "react";
import {slide as menu} from 'react-burger-menu'

const style = {
  background: "linear-gradient(to right bottom, #ffffff, #0081ff)",
  height: "100%",
  width: "100px"
};


export default class Sidebar extends React.Component {
  render() {
    return (
    <div className="sidebar">
      <ul>
         <li>123</li>
         <li>456</li>
      </ul>
    </div>);
  }
}
