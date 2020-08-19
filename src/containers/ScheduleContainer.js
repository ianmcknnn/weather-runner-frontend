import React from 'react'

class ScheduleContainer extends React.Component {
  render() {
    return ("SCHEDULE")
    // Takes in a user object with an array of runs
    // Also takes in forecast data in current, hourly, and weekly formats
    // Display forecast data to user
    // Allow the user to "schedule" a run:
      // Give the user a form that accepts a datetime as input
      // Form POSTS a new Run object with user's id associated.
    // Access the array of runs
      // Display only those runs whose datetime is after the current datetime
  }
}

export default ScheduleContainer