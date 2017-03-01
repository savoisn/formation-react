import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './containers/About';
import Users from './containers/Users';
import User from './components/User';


function requireAuth(nextState, replaceState) {
  if (AuthStore.getState().accessToken === null) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

var routes = [ 
  <Route path="/" component={App} >
    <Route path="users" component={Users} >
      <Route path="/user/:userId" component={User} />
    </Route>
  </Route>,
  <Route path="about" component={About} />
];

export default routes;
