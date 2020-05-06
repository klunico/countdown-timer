import React from 'react';
import Timer from './Timer.js';

function EventOutput(props) {
	return (
		<div>
				<br />
      		<div className='resultContainer'> 
						Countdown of
						<br /> 
						<strong>{props.eventName}</strong>
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