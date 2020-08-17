import React from 'react';
import {Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css';
import NavBar from '../components/NavBar';
import FriendsContainer from './FriendsContainer';
import StatsContainer from './StatsContainer';
import ScheduleContainer from './ScheduleContainer';

class App extends React.Component {
  state = { 
    loggedIn: false
  }

  render() {
    return (
      <React.Fragment>
        <NavBar handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
        <Router>
          <Container>
            <Route path="/schedule" render={() => <ScheduleContainer/>}/>
            <Route exact path="/stats" render={() => <StatsContainer/>}/>
            <Route path="/friends" render={() => <FriendsContainer/>} />
          </Container>
        </Router>
      </React.Fragment>
    );
  }
  handleLogin = (data) => {
    localStorage.token = data.token
    this.loggedIn()
  }
  loggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }
}

export default App;
