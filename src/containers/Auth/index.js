import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleLogin, getCurrentUser } from '../../actions/userActions';
import { FormGroup } from '../../components/ui/FormGroup';
import { ButtonBase, CircularProgress } from '@material-ui/core';
import './styles.scss';


class Auth extends Component {

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		const { fetching, error } = this.props;

		return(
              	<div id="auth">
		          	<div className="auth-window">
						<div className="title">
							Autorization to Capacity Planning Tool
						</div>
						<form onSubmit={this.handleSubmit} className="body">
							<FormGroup 
								type="text"
								name="username"
								label="Login" 
								hasError={error}
								/>
							<FormGroup 
								type="password"
								name="password"
								label="Password"
								hasError={error}
								error={error}
								 />
							<ButtonBase type="submit" 
								className={fetching ? "btn primary-btn fetching" : "btn primary-btn"}>
								{fetching ? <CircularProgress className="loader" size={20} /> : null}
								Login
							</ButtonBase>
						</form>
					</div>
				</div>
		)
	}

	handleSubmit(e) {
		const formData = new FormData(e.target);
   		const user = {};
   		e.preventDefault();
   		const redirect = this.props.history.push.bind(null, "/");

   		for (let key of formData.keys()) {
   			user[key] = formData.get(key);
   		}
   		if(user.username.length && user.password.length) {
   			this.props.handleLoginAction(user, this.props.getCurrentUserAction, redirect);
   		}
		
	}
}

const mapStateToProps = store => {
  return {
    fetching: store.user.fetching,
    error: store.user.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLoginAction: (user, getCurrentUserFunc, redirect) => dispatch(handleLogin(user, getCurrentUserFunc, redirect)),
    getCurrentUserAction: (redirect) => dispatch(getCurrentUser(redirect))
  }
}


export default connect(mapStateToProps,  mapDispatchToProps)(Auth)