import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Auth from './components/Auth';
import Content from './components/Content';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import { handleLogout, checkUser, getCurrentUser } from './actions/userActions';

library.add(faCogs, faSignOutAlt, faCalendar);  

const history = createBrowserHistory();

class App extends Component {
  render() {

    const { user, isAuth } = this.props;
    const { handleLogoutAction } = this.props;

    return (
      <Router>
        <Route render={({location})=>(
          <Switch>
            <Route path="/auth" exact render={()=>{
              if ( isAuth ) {
                return (<Redirect to="/"/>)
              } else {
                return (<Auth history={history} />)
                  }
              }} />
              <Route path="/" render={()=>{
                if ( isAuth ) {
                  return (<Content 
                    handleLogoutAction={handleLogoutAction}
                    history={history} 
                    user={user} />)
                } else {
                  return (<Redirect to="/auth"/>)
                }
                }} />
          </Switch>
        )} />
      </Router>
    );
  }

  componentDidMount() {
    const { getCurrentUserAction } = this.props;
    const redirect = history.push.bind(null, "/");
    this.props.checkUserAction(getCurrentUserAction, redirect);
  }

}



const mapStateToProps = store => {
  return {
    user: store.user.user,
    isAuth: store.user.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogoutAction: (redirect) => dispatch(handleLogout(redirect)),
    checkUserAction: (getCurrentUser, redirect) => dispatch(checkUser(getCurrentUser, redirect)),
    getCurrentUserAction: (redirect) => dispatch(getCurrentUser(redirect))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
