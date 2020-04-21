import React from "react";

import ToolBar from "../../components/Toolbar/ToolBar";
import SideBar from "../../components/Sidebar/SideBar";

import Home from "../../components/Content/Home/Home";
import ATM from "../../components/Content/ATM/ATM";
import BAN from "../../components/Content/BAN/BAN";
import ELK from "../../components/Content/ELK/Elektrant";
import GNS from "../../components/Content/GNS/GNS";
import GIV from "../../components/Content/GIV/GIV";
import MS from "../../components/Content/MS/MS";
import RIT from "../../components/Content/RIT/RIT";
import SIV from "../../components/Content/SIV/SIV";
import SNV from "../../components/Content/SNV/SNV";
import TAB from "../../components/Content/TAB/TAB";
import TRS from "../../components/Content/TRS/TRS";
import TRL from "../../components/Content/TRL/TRL";
import Test from "../../components/Content/Test/Test";

import "./main.css";
const { ipcRenderer } = window.require("electron");

class mainWindow extends React.Component {
   constructor(props) {
      super(props);
      this.updateNav = this.updateNav.bind(this);
      this.state = {
         color: "green",
         content: <GNS />,
         mainContent: [
            {
               name: "Home",
               component: <Home />
            },
            {
               name: "ATM - Automobile",
               component: <ATM />
            },
            {
               name: "BAN - Bahn",
               component: <BAN />
            },
            {
               name: "ELK - Elektrant",
               component: <ELK />
            },
            {
               name: "GNS",
               component: <GNS />
            },
            {
               name: "GIV",
               component: <GIV />
            },
            {
               name: "MS - Mittelspannung",
               component: <MS />
            },
            {
               name: "RIT - Rittal",
               component: <RIT />
            },
            {
               name: "SIV - Sivacon",
               component: <SIV />
            },
            {
               name: "SNV",
               component: <SNV />
            },
            {
               name: "TAB - Tableau",
               component: <TAB />
            },
            {
               name: "TRS - Trafoschrank",
               component: <TRS />
            },
            {
               name: "TRL - TriLine",
               component: <TRL />
            },
            {
               name: "Test",
               component: <Test />
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

   updateNav = event => {
      event.preventDefault();
      switch (event.target.id) {
         case "Home":
            this.setState({
               content: <Home />
            });
            break;
         case "ATM - Automobile":
            this.setState({
               content: <ATM />
            });
            break;
         case "BAN - Bahn":
            this.setState({
               content: <BAN />
            });
            break;
         case "GNS":
            this.setState({
               content: <GNS />
            });
            break;
         case "GIV":
            this.setState({
               content: <GIV />
            });
            break;
         case "ELK - Elektrant":
            this.setState({
               content: <ELK />
            });
            break;
         case "MS - Mittelspannung":
            this.setState({
               content: <MS />
            });
            break;
         case "RIT - Rittal":
            this.setState({
               content: <RIT />
            });
            break;
         case "SIV - Sivacon":
            this.setState({
               content: <SIV />
            });
            break;
         case "SNV":
            this.setState({
               content: <SNV />
            });
            break;
         case "TAB - Tableau":
            this.setState({
               content: <TAB />
            });
            break;
         case "TRS - Trafoschrank":
            this.setState({
               content: <TRS />
            });
            break;
         case "TRL - TriLine":
            this.setState({
               content: <TRL />
            });
            break;
         case "Test":
            this.setState({
               content: <Test />
            });
            break;
         default:
            console.log("nicht vergeben: ", event.target.id);
      }
   };

   render() {
      return (
         <React.Fragment>
            <ToolBar />
            <div className="content_wrapper">
               <SideBar
                  links={this.state.mainContent}
                  updateNav={this.updateNav}
                  />
               <div className="content">
                  {this.createSuche()}
                  {this.state.content}
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default mainWindow;
