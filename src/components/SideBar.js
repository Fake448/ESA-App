import React from "react";

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
