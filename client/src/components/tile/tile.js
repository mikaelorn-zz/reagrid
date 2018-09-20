import React from 'react';
import ReactDOM from 'react-dom';

export default class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.tile.id,
            text: props.tile.text,
            url: props.tile.url
        }
    }

   render() {
      return (
          <div className="tile">
            {this.state.id}
            {this.state.text}
            {this.state.url}
          </div>
      );
   }
}