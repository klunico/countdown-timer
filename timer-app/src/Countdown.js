import React from 'react';
import Logo from './Logo.js';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName: "Enter event name",
			date: "",
			time: "00:00"
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.name

  	this.setState({
			eventName: event.target.value,
			date: event.target.value,
			time: event.target.value
		});
	}

  handleSubmit(event) {
  	alert('Following event has been created: ' + this.state.eventName + ' at ' + this.state.date + " " + this.state.time);
  	event.preventDefault();
  }

	render() {
		return	<div>
							<div>
								<form onSubmit={this.handleSubmit}>
									<label>
				            Name:
				            <input  name="eventName" type="text" placeholder={this.state.eventName}  
				            	onChange={this.handleInputChange.bind(this)} required />
				            Date:
				            <input  name="date" type="date"  required 
				            	onChange={this.handleInputChange.bind(this)} />
				            Time:
				            <input name="time" type="time"  placeholder={this.state.time}
				            	onChange={this.handleInputChange.bind(this)} />
				          <br />
									</label>
				          	<input type="submit" value="Submit" />
			      		</form>
							</div>
						<hr />
							<Logo />
						<hr />
		      		<div> 
								Countdown of {this.state.eventName}
						<hr />
								year {new Date().getFullYear()}
								months {new Date().getMonth() + 1}
								days {new Date().getDate()}
								hours {new Date().getHours()}
								minutes {new Date().getMinutes()}
								seconds {new Date().getSeconds()}
							</div>
						</div>
	}
}

export default Countdown;