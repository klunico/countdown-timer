import React, {Component} from 'react';
import logo from './blue-hourglass.gif';
import './App.css';
import Countdown from './Countdown.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>It is {new Date().toLocaleString('de-DE')}.</h3>
          <Countdown />
        </header>
      </div>
    );
  }

}

  
export default App;
