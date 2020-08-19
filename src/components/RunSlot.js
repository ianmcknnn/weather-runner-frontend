import React from 'react'
import { Item, Divider, Grid } from 'semantic-ui-react';
import { format } from 'date-fns'
import { parseISO } from 'date-fns/esm';

function RunSlot(props) {
  console.log(`run: ${props.run}`)
  const {run} = props
  let {date} = run
  
  date = parseISO(date)
  console.log('date: ', date);
  
  return (
    <Grid.Row divided>
      <Grid.Column width={4}>
        <Item>{format(date, "MM/dd/yyyy")}</Item> 
      </Grid.Column>
      <Grid.Column width={4}>
        <Item>{`${run.distance} mile${run.distance === 1 ? '' : 's'}`}</Item>
      </Grid.Column>
      <Grid.Column width={4}>
        <Item>{run.rating}</Item>
      </Grid.Column>
    </Grid.Row>

  )
}

export default RunSlot;