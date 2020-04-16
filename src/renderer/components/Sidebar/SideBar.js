import React from "react";
import './SideBar.css'

const navLinks = [
   {
      text : 'home',
      path : '/',
      icon : ''
   },
   {
      text : 'GIV',
      path : '/GIV',
      icon : ''
   },
   {
      text : 'GNS',
      path : '/GNS',
      icon : ''
   },
   {
      text : 'Elektrant',
      path : '/Elektrant',
      icon : ''
   },
]




export default class Sidebar extends React.Component {



   render() {
      return (
         <React.Fragment>
            <div className="sidebar">
               <ul>
                  <li>Home</li>
                  <li>GIV</li>
                  <li>GNS</li>
                  <li>Elektrant</li>
               </ul>
            </div>
         </React.Fragment>
      );
   }
}
