import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import PlanningTool from './PlanningTool';
import Settings from './Settings';

class Content extends Component {

	render() {

		return(
			<div id="content">
				<Header />
				<div className="content">
					<Switch>
          				<Route path="/settings" component={Settings} />
          				<Route path="/" exect component={PlanningTool} />
        			</Switch>
				</div>
			</div>
			
		)
	}
}

export default Content