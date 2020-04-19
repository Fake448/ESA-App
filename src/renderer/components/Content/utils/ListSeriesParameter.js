import React, { Fragment } from "react";

class List_Series_Parameter extends React.Component {
   constructor(props) {
      super(props);

      function listItem(props) {
         return <div>test</div>;
         console.log("foo");
      }

      // console.log("List-props: ", props);
   }

   render() {
      return (
         <React.Fragment>
            <table className="list_series_parameter">
               <thead>
                  <tr>
                     <th>Bezeichnung</th>
                     <th>Wert</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.infos.map(info => (
                     <tr key={info["name"]}>
                        <td key={"bezeichnung" + info.name}>{info.name}</td>
                        <td key={"wert" + info.name}>{info.value}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </React.Fragment>
      );
   }
}

export default List_Series_Parameter;
