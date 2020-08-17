import React from "react";
import { Menu, Header } from "semantic-ui-react";
import AuthModal from "./AuthModal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu>
        <Menu.Item>
          <Header as='h4'>weather-runner-app (placeholder)</Header> 
        </Menu.Item> 
        <Menu.Item
          name='profile'
          active={this.state.activeItem === 'profile'}
          content='Profile'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='schedule'
          active={this.state.activeItem === 'schedule'}
          content='Schedule'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='stats'
          active={this.state.activeItem === 'stats'}
          content='Stats'
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={this.state.activeItem === 'friends'}
          content='Friends'
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          {this.props.loggedIn ? 
            <Menu.Item 
            name='logout'
            active={this.state.activeItem === 'logout'}
            content='Logout'
            onClick={this.handleItemClick}
            />
          :
            <AuthModal handleLogin={this.props.handleLogin} />
          }
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
