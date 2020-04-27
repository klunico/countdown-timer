import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	year: new Date().getFullYear(),
    	month: new Date().getMonth(),
    	days: new Date().getDay(),
    	hours: new Date().getHours(),
    	minutes: new Date().getMinutes(),
    	seconds: new Date().getSeconds()
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(prevState => ({
        year: new Date().getFullYear(),
	    	month: new Date().getMonth(),
	    	days: new Date().getDay(),
	    	hours: new Date().getHours(),
	    	minutes: new Date().getMinutes(),
	    	seconds: new Date().getSeconds()
      }));
    } ,1000);
  };

  render () {
    const { year, month, days, hours, minutes, seconds } = this.state;
    return	<div>
							year {year} 
							<br />
							months {month}
							<br />
							days {days}
							<br />
							hours {hours}
							<br />
							minutes {minutes}
							<br />
							seconds {seconds}
						</div>
  }
}
  
export default Timer;
