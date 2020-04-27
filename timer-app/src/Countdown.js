import React from 'react';
import Logo from './Logo.js';
import Timer from './Timer.js';
// import FunctionSubmit from './FunctionSubmit.js';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			eventName: "name",
			time: "00:00"
		};
	}

	handleSubmit(event) {
		console.log('Sumit clicked')
  	alert('Following event has been created: ' + this.state.eventName + ' at ' + this.state.date + " " + this.state.time);
  	event.preventDefault();
  }

	handleChange(event) {
		// const target = event.target;
		// const value = target.name

  	this.setState({
			eventName: event.target.value,
			date: event.target.value,
			time: event.target.value
		});
	}


	render() {
		// const {eventName, date, time} = this.state;
		return	(
			<div>
				<div>
					<form>
						<fieldset>
							<legend>Enter event name</legend>
								<label>Name:<input  name="eventName" type="text" placeholder={this.state.eventName}  
			            	onChange={this.handleChange} 
			            	required />
			            	<br />
			            Date:<input  name="date" type="date"  required 
			            	onChange={this.handleChange} 
			            	/><br />
			            Time:<input name="time" type="time"  placeholder={this.state.time}
			            	onChange={this.handleChange} />
			            	<br /><br />
								</label>
									<input type="submit" value="Submit" onSubmit={this.handleSubmit} />
						</fieldset>
      		</form>
				</div>
					<Logo />
				<hr />
      		<div className='resultContainer'> 
						Countdown of
						<br /> 
						<strong>{this.state.eventName}</strong>
						<Timer />
						<hr />
					</div>
			</div>
		);
	}
}

export default Countdown;