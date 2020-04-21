import React from "react";
import "./SideBar.css";
// import { AccessAlarm, ThreeDRotation, Height } from "@material-ui/icons";

const styles = {
  color: "rgb(16, 46, 112)",
  height: "30px"
};

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <div className="sidebar_logo">
            <img
              src={process.env.PUBLIC_URL + "/img/logo/icon.svg"}
              alt="error"
            ></img>
          </div>

          <ul className="sidebar_navlist">
            {this.props.links
              ? this.props.links.map(link => (
                  <li key={link["name"]}>
                    <button
                      id={link.name}
                      key={link.name}
                      style={styles}
                      onClick={this.props.updateNav}
                     //  onClick={console.log("click")}
                    >
                      {link.name}
                      {/* <span className="badge badge-secondary">
                                   New
                                </span> */}
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
