import React, { useState, useEffect} from 'react';


const Timer = ({eventName, eventDate, eventTime, eventStarted}) => {
  const [state, setState] = useState({
    		days: 0,
	    	hours: 0,
	    	minutes: 0,
	    	seconds: 0,
	    	distance: 0
    });

	const calculateTime = () => {
	  const distance = Date.parse(eventDate, eventTime) - Date.parse(new Date());
	  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  setState({
	    	days: days,
	    	hours: hours,
	    	minutes: minutes,
	    	seconds: seconds
    });
	}

  useEffect(() => {
  	if (!eventStarted) {
			return;
		}
    setInterval(() => {
      calculateTime();
      if (this.state.distance<=0){
      	clearInterval(calculateTime);
      }
    } ,1000);
  },[eventStarted]);

  return	(
  	<div>
  		<div className='result-container'> 
				Countdown of
				<br /> 
				<strong>How is this not showing?</strong>
				<br /> 
				<hr />
			</div>
	  	<div className='result'>
				{eventName}
				<hr />
				<div className='day-box'>
				{state.days} {state.days === 1 ? 'day' : 'days'}</div>
				<hr />
				<div className='hour-box'>{state.hours} hours</div>
				<hr />
				<div className='minute-box'>{state.minutes} minutes</div>
				<hr />
				<div className='second-box'>{state.seconds} seconds</div>
			</div>
		</div>
	);
};
  
export default Timer;
