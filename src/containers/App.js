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
      this.setState({ loggedIn: true })

    }
  }

  render() {
    return (
        
        <Router>
          <NavBar logOut={this.logOut} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
          <Container>
            <Route exact path="/" render={() => <Welcome />}/>
            <Route path="/profile" render={() => <ProfileContainer user={this.state.current_user} />}/>
            <Route path="/schedule" render={() => <ScheduleContainer user={this.state.current_user} />}/>
            <Route exact path="/stats" render={() => <StatsContainer user={this.state.current_user} />}/>
            <Route path="/friends" render={() => <FriendsContainer user={this.state.current_user} />} />
          </Container>
        </Router>

    );
  }
  handleLogin = (data) => {
    localStorage.token = data.token
    localStorage.user_id = 
    this.setState({
      loggedIn: true,
      current_user: data.user
    })
  }
 

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedIn: false,
      current_user: null
    })
    return <Redirect to="/" />
  }
}

export default App;
