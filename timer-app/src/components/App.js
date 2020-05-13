import React from 'react';
import '../css/App.css';
import TimeNow from './TimeNow.js';
import Logo from './Logo.js';
import InputForm from './InputForm.js';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <TimeNow />
        </header>
          <InputForm />
          <Logo />
      </div>
    );
  }

}
  
export default App;
