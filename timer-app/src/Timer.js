import React, { useState, useEffect} from 'react';


const Timer = ({eventName, eventDate, eventTime, eventStarted}) => {
  const [state, setState] = useState({
    		days: 0,
	    	hours: 0,
	    	minutes: 0,
	    	seconds: 0
    });

	const calculateTime = () => {
	  // const now = new Date(eventDate,  eventTime);
	  console.log('calculateTime start')
	  console.log(eventName)
	  console.log(eventDate)
	  console.log(eventTime)
	  const eventYear = eventDate.substr(0, 4);
	  const eventMonth = eventDate.substr(5, 2);
	  const eventDay = eventDate.substr(8, 2);
	  const eventHour =	eventTime.substr(0, 2);
	  const eventMinutes =	eventTime.substr(3, 2); 
	  const eventSeconds = 0 ;
	  const tomorrow = new Date( eventYear, eventMonth, eventDay, eventHour, eventMinutes, eventSeconds);
	  
	  console.log('calculateTime tomorrow')
	  console.log(tomorrow)

	  console.log(eventStarted)
	  
	  const now = new Date();
	  const nowYear = now.getFullYear();
	  const nowMonth = now.getMonth();
	  const nowDate = now.getDate();
	  const nowHour = now.getHours();
	  const nowMintues = now.getMinutes();
	  const nowSeconds = now.getSeconds();
	  const calculateNow = new Date(nowYear, nowMonth, nowDate, nowHour, nowMintues, nowSeconds);
	  console.log('calculateTime now')
	  console.log(calculateNow)

	  // console.log(now.getFullYear())
	  // console.log(now.getMonth())
	  // console.log(now.getDate())
	  // console.log(now.getHours())
	  // console.log(now.getMinutes())
	  // console.log(now.getSeconds())
	  // const tomorrow = eventDate?.getTime() ?? 0;
	  
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
				<div className='day-box'>days {state.days}</div>
				<hr />
				<div className='hour-box'>hours {state.hours}</div>
				<hr />
				<div className='minute-box'>minutes {state.minutes}</div>
				<hr />
				<div className='second-box'>seconds {state.seconds}</div>
			</div>
		</div>
	);
};
  
export default Timer;
