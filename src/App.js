import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ba3 from "./ba3";
import events from "./sample";
class App extends Component {
  constructor()
  
{ 
  super();
   this.state={
    events: {}
}
}
componentDidMount(){
this.setState( {events: events} )
}


  render() {
    return (
      <div className="row mt-5 wow">
      
      </div>
    );
  }
}

export default App;
