import React from 'react';
import {Card, Image, Icon} from "semantic-ui-react";
import IMG from './runner_default.png';
import UserUpdate from "./UserUpdate";

function BioSection(props) {

  const {user} = props
  
  return (
    <Card>
  <Image src={user.img_url || IMG} wrapped ui={false} circular />
  <Card.Content>
    <Card.Header>{user.name}</Card.Header>
    <Card.Meta>
        <span className='location'>{user.location}</span>
      </Card.Meta>
    <Card.Description>
      {user.bio || "Add a bio!"}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a href={'/friends'}>
      <Icon name='user' />
      {0} Friends
    </a>
    <UserUpdate handleLogin={props.handleLogin} user={user} />
  </Card.Content>
</Card>
  )
}

export default BioSection;