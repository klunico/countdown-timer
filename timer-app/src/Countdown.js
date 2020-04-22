import React, { Component } from 'react';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eventName: "Enter event name",
			time: "00:00"
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}
 
  handleInputChange(event) {
    const target = event.target;
    const time = target.name === 'time' ? "00:00" : target.value;  
    // const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: time    });
  }

	render() {
		return	<div>
							<div>
								<form >
				            <p>Name:</p>
				            <input 
				              name="eventName"
				              type="text" 
				              value={this.state.eventName}
				              onChange={this.handleInputChange}
				              required
				            />
				            <p>Date:</p>
				            <input 
				              name="date"
				              type="date"
				              onChange={this.handleInputChange}
				              required
				            />
				            <p>Time:</p>
				            <input 
				              name="time" 
				              type="time"
				              onChange={this.handleInputChange}
				              value={this.state.time}
				            />
				          <br />
				          <input 
				            type="submit"
				          />
			      		</form>
							</div>
		      		<div> 
								<h3>Countdown</h3>
								<p>days</p>
								<p>hours</p>
								<p>minutes</p>
								<p>seconds</p>
							</div>
						</div>
	}
}

export default Countdown;