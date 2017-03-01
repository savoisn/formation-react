'use strict';

import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import axios from 'axios';
import history from './history';

import { Provider } from 'react-redux';

import store from './store';

import routes from './routes';

import App from './components/App';
import About from './containers/About';
import People from './containers/People';
import Users from './containers/Users';
import User from './components/User';

// Try to connect user from local storage value

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path="users" component={Users} >
          <Route path="/user/:userId" component={User} />
        </Route>
      </Route>
      <Route path="people" component={People} />
      <Route path="about" component={About} />
    </Router>
   </Provider>),
  document.getElementById('wrapper')
);
