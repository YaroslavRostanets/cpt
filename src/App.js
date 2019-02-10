import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Auth from './containers/Auth';
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

    const { user } = this.props;

    return (
      <Router>
        <Route render={({location})=>(
          <Switch>
            <Route path="/auth" exact render={()=>{
              if ( user ) {
                return (<Redirect to="/"/>)
              } else {
                return (<Auth history={history} />)
                  }
              }} />
              <Route path="/" render={()=>{
                if ( user ) {
                  return (<Content history={history} user={user} />)
                } else {
                  return (<Redirect to="/auth"/>)
                }
                }} />
          </Switch>
        )} />
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.userData
  }
}

export default connect(mapStateToProps)(App)
