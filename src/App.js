import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Auth from './components/Auth';
import PlanningTool from './components/PlanningTool';
import './App.scss';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PlanningTool} />
          <Route path="/auth" component={Auth} />
        </div>
      </Router>
    );
  }
}

export default App;
