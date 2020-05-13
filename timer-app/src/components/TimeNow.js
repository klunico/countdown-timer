import React from 'react';
import '../css/TimeNow.css'

class TimeNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString('de-DE'),
      time: new Date().toLocaleTimeString('de-DE')
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
        date: new Date().toLocaleDateString('de-DE'),
        time: new Date().toLocaleTimeString('de-DE'),
      }));
    } ,1000);
  };

  render () {
    const { date, time } = this.state;
    return (
        <h3>{date}<br />
        {time}</h3>
    );
  }
}
  
export default TimeNow;
