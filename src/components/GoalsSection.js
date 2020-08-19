import React from 'react'
import ProgressDonut from './ProgressDonut'
import { Grid, Item } from 'semantic-ui-react';

class GoalsSection extends React.Component {
  render() {
    const {user} = this.props
    return (
      <div className="goal-progress">
        <div className="progress-donut"><ProgressDonut user={user}/></div>
        <div className="progress-desc">
          SOME TEXT WILL GO HERE AND SOME BUTTONS
        </div>
      </div>
    )
  }
}

export default GoalsSection;