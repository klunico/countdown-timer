import React from 'react';
import './App.css';
import Countdown from './Countdown.js';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h3>It is {new Date().toLocaleString('de-DE')}.</h3>
          <Countdown />
        </header>
      </div>
    );
  }

}
  
export default App;
