import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import './utils/ga';

const history = createHashHistory({
  queryKey: false
});

const onEnter = () => window.scrollTo(0, 0);

render((
  <Router history={history}>
    <Route
      path="/"
      component={App}
      onEnter={onEnter}
    />
    <Route
      path="til/:til"
      component={App}
      onEnter={onEnter}
    />
    <Route
      path="label/:label"
      component={App}
      onEnter={onEnter}
    />
  </Router>
), document.getElementById('main'));
