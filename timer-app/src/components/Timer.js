import React, { useState, useEffect} from 'react';
import '../css/Timer.scss'


const Timer = ({eventName, eventDate, eventTime, eventStarted}) => {
  const [state, setState] = useState({
    		days: 0,
	    	hours: 0,
	    	minutes: 0,
	    	seconds: 0,
	    	distance: 0
    });

	const calculateTime = () => {
	  const now = Date.parse(new Date());
	  const tomorrow = Date.parse(eventDate + "T" + eventTime);

    const distance = tomorrow - now  
		const stopCountdown = () => {
			clearInterval(calculateTime);
		} 

  	if (distance === 0 ) {
  		alert('Following event has been reached!');
  		stopCountdown();
  	}
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
  		<div className='title'> 
				Countdown of
				<h2>{eventName}</h2>
		</div>
			<div className="clock-container">
			  <div className="clock-col">
			    <p className="clock-day">{state.days}</p>
			    <p className="clock-label">
			      {state.days === 1 ? 'Day' : 'Days'}
			    </p>
			  </div>
			  <div className="clock-col">
			    <p className="clock-hours">{state.hours}</p>
			    <p className="clock-label">
			      Hours
			    </p>
			  </div>
			  <div className="clock-col">
			    <p className="clock-minutes">{state.minutes}</p>
			    <p className="clock-label">
			    	Minutes
			    </p>
			  </div>
			  <div className="clock-col">
			    <p className="clock-seconds">{state.seconds}</p>
			    <p className="clock-label">
			      Seconds
			    </p>
			  </div>
			</div>
		</div>
	);
};
  
export default Timer;
