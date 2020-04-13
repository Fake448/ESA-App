import React from "react";

const style = {
  background: "linear-gradient(to right bottom, #ffffff, #0081ff)",
  height: "100px",
};

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header" style={style}>ESA - Tool </div>{" "}
    </React.Fragment>
    );
  }
}
