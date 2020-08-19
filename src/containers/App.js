import React from 'react';
import {Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import '../App.css';
import NavBar from '../components/NavBar';
import Welcome from "./Welcome";
import ProfileContainer from './ProfileContainer';
import FriendsContainer from './FriendsContainer';
import StatsContainer from './StatsContainer';
import ScheduleContainer from './ScheduleContainer';

class App extends React.Component {
  state = { 
    loggedIn: false
  }

  componentDidMount(){
    if (localStorage.token) {
      let request = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      }
      fetch(`http://localhost:3000/api/v1/users/${localStorage.current}`, request)
      .then(r => r.json())
      .then(data => this.setState({ 
        loggedIn: true,
        current_user: data.user
      }))
    }
  }

  render() {
    return (
        
        <Router>
          <NavBar logOut={this.logOut} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
          <Container>
            <Route exact path="/" 
            render={this.state.loggedIn ? () => <Redirect to="/profile" /> : () => <Welcome />} />
            <Route path="/profile" 
            render={!this.state.loggedIn ? () => <Redirect to="/" /> : (rProps) => <ProfileContainer 
              user={this.state.current_user} handleLogin={this.handleLogin} {...rProps}/>} />
            <Route path="/schedule" 
            render={!this.state.loggedIn ? () => <Redirect to="/" /> : (rProps) => <ScheduleContainer 
              user={this.state.current_user} {...rProps}/>} />
            <Route exact path="/stats" 
            render={!this.state.loggedIn ? () => <Redirect to="/" /> :(rProps) => <StatsContainer 
              user={this.state.current_user} {...rProps}/>} />
            <Route path="/friends" 
            render={!this.state.loggedIn ? () => <Redirect to="/" /> :(rProps) => <FriendsContainer 
              user={this.state.current_user} {...rProps}/>}  />
          </Container>
        </Router>
    );
  }
  handleLogin = (data) => {
    console.log('data: ', data);
    localStorage.token = data.token;
    localStorage.current = data.user.id
    this.setState({
      loggedIn: true,
      current_user: data.user
    });
  }
 

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedIn: false,
      current_user: null
    })
  }
}

export default App;
