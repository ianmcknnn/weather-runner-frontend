import React from 'react'
import RunsSection from '../components/RunsSection'

class ScheduleContainer extends React.Component {

  componentDidMount() {
  }

  render() {
    return (<div>
      <RunsSection runs={this.futureRuns()}/>
    </div>)

    
    // Takes in a user object with an array of runs
    // Also takes in forecast data in current, hourly, and weekly formats
    // Display forecast data to user
    // Allow the user to "schedule" a run:
      // Give the user a form that accepts a datetime as input
      // Form POSTS a new Run object with user's id associated.
    // Access the array of runs
      // Display only those runs whose datetime is after the current datetime
  }

  futureRuns() {
    return this.props.user.runs.filter(run => run.date > Date.now)
  }

  createNewRun() {

  }

  displayWeather() {
    fetch('localhost:3000/display/' + this.props.user.zipcode)
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

}

export default ScheduleContainer