import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Tile from '../tile/tile';

export default class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tiles: [],
            gridId: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    };

    componentDidMount() {
        Axios.get("http://localhost:3000/grids/1")
        .then((response) => { //arrow function to get to components this object
            console.log("grids/1 returns: " + JSON.stringify(response.data))
            this.setState({
                tiles: response.data.tiles,
                gridId: response.data.id
            });
        })
        .catch(function(error) {
            console.log(error);
        })
    }

   render() {
      return (
          <div className="grid-container">
          <h3>grid id: {this.state.gridId}</h3>
          {
              this.state.tiles.map((tile) => {
                return <Tile tile ={tile}/>
              })
          }
          </div>
      );
   }
}