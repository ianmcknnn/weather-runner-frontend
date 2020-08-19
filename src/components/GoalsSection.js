import React from 'react'
import ProgressDonut from './ProgressDonut'
import { Grid, Item, Button } from 'semantic-ui-react';

class GoalsSection extends React.Component {
  render() {
    const {user} = this.props
    return (
      <div className="goal-progress">
        <div className="progress-donut"><ProgressDonut user={user}/></div>
        <div className="progress-desc">
        <Statistic>
          <Statistic.Value>5,550</Statistic.Value>
          <Statistic.Label>Downloads</Statistic.Label>
        </Statistic>
          <Button>Log a Run</Button> 
        </div>
      </div>
    )
  }
}

export default GoalsSection;