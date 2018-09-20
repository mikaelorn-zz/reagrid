import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '../components/grid/grid';

export default class Playground extends React.Component {
   render() {
      return (
          <div className="playground">
            <h3>playground</h3>
            <Grid />
          </div>
      );
   }
};