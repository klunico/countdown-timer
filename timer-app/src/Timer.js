import React, { useState, useEffect} from 'react';

// const Timer = ({eventDate, eventName}) => {
const Timer = ({eventName, eventDate, eventTime, eventStarted}) => {
  const [state, setState] = useState({
    		days: 0,
	    	hours: 0,
	    	minutes: 0,
	    	seconds: 0
    });

	const calculateTime = () => {
	  // const now = new Date().getTime();
	  const now = new Date(eventDate,  eventTime);
	  console.log(eventDate);
	  console.log(eventTime);
	  console.log(now);
	  const tomorrow = eventDate?.getTime() ?? 0;
	  const distance = tomorrow - now;

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
    } ,1000);
  },[eventStarted]);

  return	(
  	<div>
			{eventName}
			<br />
			days {state.days}
			<br />
			hours {state.hours}
			<br />
			minutes {state.minutes}
			<br />
			seconds {state.seconds}
		</div>
	);
};
  
export default Timer;
