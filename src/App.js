import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './landing/Landing';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import Massage from './massage/Massage';
import Minerals from './minerals/Minerals';
import Movement from './movement/Movement';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect 
} from 'react-router-dom';
import './App.css';



class App extends Component {
 
  render() {
    return (
      <Router>
        <div className="App">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Hello Bulma!</title>
          </head>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/massage" component={Massage}/>
              <Route exact path="/minerals" component={Minerals}/>
              <Route exact path="/movement" component={Movement}/>
              <Redirect to="/"/>
            </Switch>   
        </div>
      </Router>
    );
  }
}




export default App;
