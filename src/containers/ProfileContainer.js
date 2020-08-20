import React from "react";
import BioSection from "../components/BioSection";
import GoalsSection from "../components/GoalsSection";
import RunsSection from "../components/RunsSection";
import { Grid, Segment } from "semantic-ui-react";

function ProfileContainer(props) {
    const { user } = props;
    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <BioSection handleLogin={props.handleLogin} user={user} />
          </Grid.Column>

          <Grid.Column width={12}>
            <GoalsSection handleLogin={props.handleLogin} user={user} />
            <Segment>
              <RunsSection handleLogin={props.handleLogin} runs={user.runs} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default ProfileContainer;
