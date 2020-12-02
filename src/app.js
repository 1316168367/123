import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from './pages/login/login';
import Nav from './pages/nav/Nav';
import Register from './pages/register/Register';
import Hot from './pages/hot/Hot';
import Cinema from './pages/cinema/Cinema';
import My from './pages/my/my';

import Error404 from './pages/error404/Error404'

export default class app extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Link exact to="/">1111</Link> */}
          <Route path="/" exact component={Nav}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/hot" component={Hot}></Route>
          <Route path="/cinema" component={Cinema}></Route>
          <Route path="/my" component={My}></Route>
          
          <Route component={Error404}></Route>
        </Switch>
      </HashRouter>
    );
  }
}
