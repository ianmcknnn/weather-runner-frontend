import React from "react";
import {NavLink} from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import AuthModal from "./AuthModal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
    };
  }

  render() {
    return (
      <Menu color={'blue'} inverted >
        <Menu.Item as={Header}>weather-runner-app (placeholder)</Menu.Item>

        <Menu.Item as={NavLink} to="/profile"
          name='profile'
          active={this.state.activeItem === 'profile'}
          onClick={this.handleItemClick}
        />

        <Menu.Item as={NavLink} to="/schedule"
          name='schedule'
          active={this.state.activeItem === 'schedule'}
          onClick={this.handleItemClick}
        />

        <Menu.Item as={NavLink} to="/stats"
          name='stats'
          active={this.state.activeItem === 'stats'}
          onClick={this.handleItemClick}
        />

        <Menu.Item as={NavLink} to="/friends"
          name='friends'
          active={this.state.activeItem === 'friends'}
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
