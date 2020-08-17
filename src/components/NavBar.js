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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <Menu color={'blue'} inverted >
        <Menu.Item>
          <Header as='h4'>weather-runner-app (placeholder)</Header> 
        </Menu.Item> 
        <Menu.Item
          name='profile'
          active={this.state.activeItem === 'profile'}
          onClick={this.handleItemClick}
        ><NavLink to="/profile">Profile</NavLink></Menu.Item>

        <Menu.Item
          name='schedule'
          active={this.state.activeItem === 'schedule'}
          onClick={this.handleItemClick}
        ><NavLink to="/schedule" >Schedule</NavLink></Menu.Item>

        <Menu.Item
          name='stats'
          active={this.state.activeItem === 'stats'}
          onClick={this.handleItemClick}
        ><NavLink to="/stats" >Stats</NavLink></Menu.Item>
        <Menu.Item
          name='friends'
          active={this.state.activeItem === 'friends'}
          onClick={this.handleItemClick}
        ><NavLink to="/friends" >Friends</NavLink></Menu.Item>
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
