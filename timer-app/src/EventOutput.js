import React from 'react';
import Timer from './Timer.js';

function EventOutput(props) {
	return (
		<div>
				<br />
      		<div className='result-container'> 
						Countdown of
						<br /> 
						<strong>{props.eventName}</strong>
						<br /> 
						<strong>How is this not showing?</strong>
						<br /> 
						<strong>{props.date}</strong>
						<br /> 
						<strong>{props.time}</strong>
						<br /> 
						<strong>{props.eventStarted}</strong>
						<Timer 
							eventDate={props.date}
							eventTime={props.time}
							eventStarted={props.eventStarted}
							/>
						<hr />
					</div>
			</div>
		);
}

export default EventOutput;