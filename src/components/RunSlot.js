import React from 'react'
import { Item, Grid, Rating } from 'semantic-ui-react';
import { format } from 'date-fns'
import { parseISO } from 'date-fns/esm';

function RunSlot(props) {
  let [run, setRun] = React.useState(props.run)
  let {date} = run
  date = parseISO(date)

  let handleRating = (data) => {
    setRun(data)
  }

  let updateRating = (e, {rating, maxRating}) => {
    let request = {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({run: {rating: rating} })
    }
    fetch(`http://localhost:3000/api/v1/runs/${run.id}`, request)
    .then(r => r.json())
    .then(data => handleRating(data))
  }

  return (
    <Grid.Row divided>
      <Grid.Column width={4}>
        <Item>{format(date, "MM/dd/yyyy")}</Item> 
      </Grid.Column>
      <Grid.Column width={4}>
        <Item>{`${run.distance} mile${run.distance === 1 ? '' : 's'}`}</Item>
      </Grid.Column>
      <Grid.Column width={4}>
        <Rating icon='star' rating={run.rating} maxRating={5} onRate={updateRating}/>
      </Grid.Column>
    </Grid.Row>
  )
}

export default RunSlot;