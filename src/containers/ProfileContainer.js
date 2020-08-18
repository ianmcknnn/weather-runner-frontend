import React from 'react'
import BioSection from "../components/BioSection"
import GoalsSection from "../components/GoalsSection"
import RunsSection from "../components/RunsSection"
import { Grid, Segment } from 'semantic-ui-react'

class ProfileContainer extends React.Component {
  render() {
    const {user} = this.props
    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <BioSection user={user}/>
          </Grid.Column>

          <Grid.Column width={12}>
            <Segment>
              <GoalsSection user={user}/>
            </Segment>
            <Segment>
              <RunsSection user={user}/>
            </Segment>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileContainer