import React from 'react';

class TimeNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString('de-DE')
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
        time: new Date().toLocaleString('de-DE'),
      }));
    } ,1000);
  };

  render () {
    return (
        <h3>It is {this.state.time}</h3>
    );
  }
}
  
export default TimeNow;
