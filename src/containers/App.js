import React from 'react';
import {Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
      <>
        <NavBar loggedIn={this.state.loggedIn} />
        <Router>
        <Container>
          <Switch>
          <Route path="/schedule" render={<ScheduleContainer/>}/>
          <Route exact path="/stats" render={<StatsContainer/>}/>
          <Route path="/friends" render={<FriendsContainer/>} />
          </Switch>
        </Container>
        </Router>
      </>
    );
  }
  handleLogin = (data, e) => {
    e.target.reset()
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
