import React from "react";
const { ipcRenderer } = window.require("electron");

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 12345,
    };
    ipcRenderer.on("receiveArtikelData", (e, parts) => {
      this.setState({
        parts: parts,
      });
    });
  }

  handleClick = (e) => {
    ipcRenderer.send("part:clicked", e.currentTarget.id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <h4> Parts: </h4>
          <ul className="parts">
            {this.state.parts
              ? this.state.parts.map((part) => (
                  <li key={part["name"]}>
                    <button onClick={this.handleClick} id={part["name"]}>
                      View
                    </button>
                    <p
                      style={{
                        paddingLeft: "10px",
                        display: "inline-block",
                      }}
                    >
                      {part["name"]}
                    </p>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
