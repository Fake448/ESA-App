import React from "react";
import ToolBar from "../../components/Toolbar/ToolBar";
import SideBar from "../../components/Sidebar/SideBar";
import Home from "../../components/Content/Home/Home";
import GNS from "../../components/Content/GNS/GNS";
import GIV from "../../components/Content/GIV/GIV";
// import Test from "../../components/Content/Test/Dashboard";
import Elektrant from "../../components/Content/Elektrant/Elektrant";
import "./main.css";
const { ipcRenderer } = window.require("electron");

class mainWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainContent: [
        {
          name: "Home",
          component: <Home />,
          isActive: true
        },
        {
          name: "ATM - Automobile",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "BAN - Bahn",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "ELK - Elektrant",
          component: <Elektrant />,
          isActive: false
        },
        {
          name: "GNS",
          component: <GNS />,
          isActive: false
        },
        {
          name: "GIV",
          component: <GIV />,
          isActive: false
        },
        {
          name: "MS - Mittelspannung",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "RIT - Rittal",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "SIV - Sivacon",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "SNV",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "TAB - Tableau",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "TRS - Trafoschrank",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "TRL - TriLine",
          // component: <Automobile />,
          isActive: false
        },
        {
          name: "Test",
          // component: <Test />,
          isActive: false
        }
      ]
    };

    ipcRenderer.on("receiveArtikelData", (e, artikel) => {
      this.setState({ artikel: artikel });
    });
  }

  componentDidMount() {
    ipcRenderer.send("mainWindow:loaded");
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(event);
  }

  suchechanged(event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <ToolBar />
        <div className="content_wrapper">
          <SideBar links={this.state.mainContent} />

          <div className="content">
            <div>
              {this.state.mainContent.map(content => (
                <div key={content["name"]}>
                  {content["name"]}
                  {content["isActive"]}
                </div>
              ))}
            </div>
            {this.state.mainContent.map(content => (
              <div key={content["name"]} id={content["name"]}>
                {content.component}
              </div>
            ))}
            <form onSubmit={this.formSubmitted}>
              <input
                onChange={this.suchechanged}
                id="sucheInput"
                name="sucheInput"
              ></input>
              <button type="submit">suche</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default mainWindow;
