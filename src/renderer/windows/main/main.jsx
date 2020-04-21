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
    super();
    this.updateNav = this.updateNav.bind(this);

    this.state = {
      mainContent: [
        {
          name: "Home",
          component: <Home />,
          isActive: false
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
          isActive: true
        },
        {
          name: "GIV",
          component: <GIV />,
          isActive: true
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

  createSuche() {
    return (
      <form onSubmit={this.formSubmitted}>
        <input
          onChange={this.suchechanged}
          id="sucheInput"
          name="sucheInput"
        ></input>
        <button type="submit">suche</button>
      </form>
    );
  }

  updateNav= (event) => {
    event.preventDefault();
    for (let i=0; i < this.state.mainContent.length; i++) {
      if (event.target.id === this.state.mainContent[i].name) {
        console.log(event.target.id)
        this.setState = {
          
        }
      }
    }

    this.setState = {

    }
  }

 createContent() {
    //  TODO  warum wird Funktion 2x ausgeführt???
    for (let i = 0; i < this.state.mainContent.length; i++) {
      if (this.state.mainContent[i].isActive) {
        return (
          <div
            key={this.state.mainContent[i].name}
            id={this.state.mainContent[i].name}>
            {this.state.mainContent[i].component}
          </div>
        );
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <ToolBar />
        <div className="content_wrapper">
          <SideBar links={this.state.mainContent} updateNav={this.updateNav} />
          <div className="content">
          {this.createSuche()}
            {this.createContent()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default mainWindow;
