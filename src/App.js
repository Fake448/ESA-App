
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";

import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
// import GIV from "./pages/GIV.jsx";
// import GNS from "./pages/GNS.jsx";
// import Elektrant from "./pages/Elektrant.jsx";

function App() {
   const navLinks = [
      {
         text: "Home",
         path: "/",
         icon: "icon_home",
      },
      {
         text: "Elektrant",
         path: "/elektrant",
         icon: "icon_elektrant",
      },
      {
         text: "GIV",
         path: "/giv",
         icon: "icon_giv",
      },
      {
         text: "GNS",
         path: "/gns",
         icon: "icon_gns",
      },
   ];
   return (
      <div className="App">
         <Navigation navLinks={navLinks} />
         <Router>
            <Switch>
               <Home path="/index" />
               {/* <GIV path="/giv" /> */}
               {/* <GNS path="/gns" /> */}
               {/* <Elektrant path="/elektrant" /> */}
            </Switch>
         </Router>
      </div>
   );
}

export default App;