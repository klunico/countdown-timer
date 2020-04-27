import React from 'react';
import './App.css';
import TimeNow from './TimeNow.js';
import Countdown from './Countdown.js';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <TimeNow />
          <Countdown />
        </header>
      </div>
    );
  }

}
  
export default App;
