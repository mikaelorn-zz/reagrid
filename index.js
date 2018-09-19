const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

export default class App extends React.Component {
   render() {
      return (
          <div>
            <h1>Linkgrid!!</h1>
          </div>
      );
   }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);