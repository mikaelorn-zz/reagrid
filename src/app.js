import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Playground from './components/playground';

export default class App extends React.Component {
    render() {
       return (
        <div> {/*TODO: use fragments*/}
            <Header />
            <Playground />
            <Footer />
        </div>

       );
    }
 };