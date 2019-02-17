import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import PlanningTool from './PlanningTool';
import Settings from './Settings';

class Content extends Component {

	render() {

		const { history, user } = this.props;
		const { handleLogoutAction } = this.props;

		return(
			<div id="content">
				<Header history={history} user={user} handleLogoutAction={handleLogoutAction} />
				<div className="content">
					<Switch>
						<Route path="/settings" exact render={()=>{
							if(user.is_admin){
								return <Settings />
							} else {
								return <Redirect to="/" />
							}
						}} />			
          				<Route path="/" exact component={PlanningTool} />
          				<Route path="*" render={()=>{
          					return <Redirect to="/" />
          				}} />
        			</Switch>
				</div>
			</div>
			
		)
	}
}

export default Content