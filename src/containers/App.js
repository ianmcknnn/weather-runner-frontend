import React from 'react';
import {Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import NavBar from '../components/NavBar';
import ProfileContainer from './ProfileContainer';
import FriendsContainer from './FriendsContainer';
import StatsContainer from './StatsContainer';
import ScheduleContainer from './ScheduleContainer';

class App extends React.Component {
  state = { 
    loggedIn: false

  }

  render() {
    return (
        
        <Router>
          <NavBar handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
          <Container>
          <Route path="/profile" render={() => <ProfileContainer user={this.state.current_user} />}/>
            <Route path="/schedule" render={() => <ScheduleContainer user={this.state.current_user} />}/>
            <Route exact path="/stats" render={() => <StatsContainer user={this.state.current_user} />}/>
            <Route path="/friends" render={() => <FriendsContainer user={this.state.current_user} />} />
          </Container>
        </Router>

    );
  }
  handleLogin = (data) => {
    console.log('data: ', data);
    localStorage.token = data.token
    this.loggedIn(data.user)
  }
  loggedIn = (user) => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      current_user: user
    })
  }
}

export default App;
