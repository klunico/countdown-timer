Recommended Frameworks and technologies

Use React and CSS-in-JS (e.g. styled-components) to structure and scope the styles to the custom components. Use local state or Redux for state management and localStorage or MongoDB to persist the data on the client and/or server.
User Stories

    User can see an event input box containing an event name field, a date field, an optional time, and a ‘Start’ button.
    User can define the event by entering its name, the date it is scheduled to take place, and an optional time of the event. If the time is omitted it is assumed to be at Midnight on the event date in the local time zone.
    User can see a warning message if the event name is blank.

    User can see a warning message if the event date or time are incorrectly entered.

    User can click on the ‘Start’ button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place.

    User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display.

Bonus features

    User can save the event so that it persists across sessions
    User can see an alert when the event is reached
    User can specify more than one event.
    User can see a countdown timer for each event that has been defined.

Links and resources

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
https://codepen.io/FlorinPop17/pen/YbpwyG
Acceptance criteria

Complete all user stories.

CASE: User can enter a name and the date of an event. Timer will continuously decrement after the Start button is pressed in the following format: days, hours, minutes, and seconds until the event takes place.
