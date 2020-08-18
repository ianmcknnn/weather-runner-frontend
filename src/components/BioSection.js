import React from 'react';
import {Card, Image, Icon} from "semantic-ui-react";
import IMG from './runner_default.png';

class BioSection extends React.Component {
  render() {

    const {user} = this.props

    
    return (
      <Card>
    <Image src={user.img_url || IMG} wrapped ui={false} circular />
    <Card.Content>
      <Card.Header>{user.name}</Card.Header>
      <Card.Description>
        {user.bio || "Add a bio!"}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {0} Friends
      </a>
    </Card.Content>
  </Card>
    )
  }
}

export default BioSection;