import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from './components/Header'
import Rover from './containers/Rover'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
				<Route  path="/opportunity" component={() => <Rover status="completed" name="Opportunity" launch="2003-06-10" end="2018-06-11" />}/>
				<Route  path="/curiosity" component={() => <Rover status="active" name="Curiosity" launch="2003-06-10" end="2010-03-21"/>}/>
				<Route  path="/spirit" component={ () => <Rover status="completed"  name="Spirit" launch="2003-06-10" end="2010-03-21" />}/>
				<Route exact path="/" render={() => (
						<Redirect to="/curiosity"/>
				)}/>
		  </div>
    );
  }
}

export default App;
