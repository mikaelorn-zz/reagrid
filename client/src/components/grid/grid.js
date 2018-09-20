import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class Grid extends React.Component {

componentDidMount() {
    //let mongodbsr = "reagrid_dbadmin:Salci8gQm@reagrid-bedug.mongodb.net/test?retryWrites=true"

    Axios.get("http://localhost:3000/grids")
        .then( function (response){
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
}

   render() {
      return (
          <div className="grid-container">

          </div>
      );
   }
}