import React from 'react';
// import EventOutput from './EventOutput.js';
import Timer from './Timer.js';


class InputForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			eventName: "name",
			time: "00:00",
			date: new Date(),
			eventStarted: false
		};
	}

	handleSubmit(event) {
  	alert('Following event has been created: ' + this.state.eventName + ' at ' + this.state.date + " " + this.state.time);
  	event.preventDefault();
  	this.setState({
			eventStarted: true
		});
  }

	handleChange(event) {
  	this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return	(
				<div>
					<form>
						<fieldset>
							<legend>Enter event name</legend>
								<label className='inputFields'>Name: <input  name="eventName" type="text" placeholder={this.state.eventName}  
			            	onChange={this.handleChange} 
			            	required />
			            	<br />
			            Date: <input  name="date" type="date"  required 
			            	onChange={this.handleChange} 
			            	/><br />
			            Time: <input name="time" type="time"  placeholder={this.state.time}
			            	onChange={this.handleChange} />
			            	<br /><br />
								</label>
									<input type="submit" value="Start" 
									onClick={this.handleSubmit} 
									/>
						</fieldset>
      		</form>	
					<Timer
						eventName={this.state.eventName} 
						eventDate={this.state.date}
						eventTime={this.state.time}
						eventStarted={this.state.eventStarted}
						 />
				</div>
			);
	}
}

export default InputForm;