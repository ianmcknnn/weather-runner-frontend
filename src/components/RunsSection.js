import React from 'react'
import {Grid, Item} from "semantic-ui-react"
import RunSlot from './RunSlot'
function RunsSection(props) {
  const runs = props.runs
  return (
    <Grid>
      <Grid.Row divided inverted="true" color={'blue'}>
        <Grid.Column width={4}>
          <Item>Date</Item> 
        </Grid.Column>
        <Grid.Column width={4}>
          <Item>Distance</Item>
        </Grid.Column>
        <Grid.Column width={4}>
          <Item>Rating</Item>
        </Grid.Column>
      </Grid.Row>
      {runs.map(run => <RunSlot run={run}/>)}
    </Grid>
  )
}
export default RunsSection;