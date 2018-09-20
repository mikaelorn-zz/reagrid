import React from 'react';
import ReactDOM from 'react-dom';
import Header from './common/header';
import Footer from './common/footer';
import Playground from './common/playground';

export default class App extends React.Component {
    render() {
       return (
        <div className="container">
            <Header />
            <Playground />
            <Footer />
        </div>
       );
    }
 };