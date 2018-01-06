import React, { Component } from 'react';
import Loader from './Triangles.svg';


class Loading extends Component {
    render() {
          return ( <img src={Loader} className="App-logo" alt="loading"/>)
    }
}


export default Loading;