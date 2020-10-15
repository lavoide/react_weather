import React from 'react';
import { Component } from 'react';
import InputText from '../containers/input'

import WeatherList from '../containers/weather_list';
import CurrentList from '../containers/current_list';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/weather" />
          </Route>
          <Route path='/weather'>
            <div>
              <InputText />
              <CurrentList />
            </div>
          </Route>
          <Route path='/:name' component={WeatherList}>
          </Route>
        </Switch>
      </Router>
    );
  }
}
