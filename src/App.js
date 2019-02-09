import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Auth from './components/Auth';
import Content from './components/Content';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

library.add(faCogs, faSignOutAlt, faCalendar);  

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Content} />
        </div>
      </Router>
    );
  }
}

export default App;
