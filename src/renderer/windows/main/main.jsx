import React from "react";
import ToolBar from "../../components/Toolbar/ToolBar";
import SideBar from "../../components/Sidebar/SideBar";
import Home from '../../components/Content/Home/Home'
import GNS from '../../components/Content/GNS/GNS'
import GIV from '../../components/Content/GIV/GIV'
import Elektrant from '../../components/Content/Elektrant/Elektrant'
import Content from "../../components/Content/Content";
import "./main.css";
const { ipcRenderer } = window.require("electron");


class mainWindow extends React.Component {
   constructor(props) {
      super(props);

      this.state =  {
         newTest: '',
         content : [
            {
               name: "Home",
               component: <Home />
            },
            {
               name: "GIV",
               component: <GIV />
            },
            {
               name: "GNS",
               component: <GNS />
            },
            {
               name: "Elektrant",
               component: <Elektrant />
            }
         ]
      }
         
      ipcRenderer.on("receiveArtikelData", (e, artikel) => {
         this.setState({ artikel: artikel });
         
      });
   }
   
   componentDidMount() {
      ipcRenderer.send("mainWindow:loaded");
      console.log(this.state);
   }

   formSubmitted(event) {
      event.preventDefault()
      console.log(event);
   }

   suchechanged(event) {
      console.log(event.target.value);
      
   }

   render() {
      return (
         <React.Fragment>
            <ToolBar />
            <div className="content_wrapper">
               <SideBar />
               <Content className="content" component={this.state.content}/>
               <form onSubmit={this.formSubmitted}>
                  <input onChange={this.suchechanged} id="sucheInput" name="sucheInput"></input>
                  <button type="submit">suche</button>
               </form>
               {/* <GNS /> */}
               {/* <GIV /> */}
            </div>
         </React.Fragment>
      );
   }
}

export default mainWindow;
