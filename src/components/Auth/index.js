import React, { Component } from 'react';
import { FormGroup } from '../ui/FormGroup';
import ButtonBase from '@material-ui/core/ButtonBase';
import classNames from 'classnames';
import './styles.scss';


class Auth extends Component {

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {

		return(
			<div id="auth">
				<div className="auth-window">
					<div className="title">
						Autorization to Capacity Planning Tool
					</div>
					<form onSubmit={this.handleSubmit} className="body">
						<FormGroup 
							type="text"
							label="Login"
							defaultValue="somelogin@com.en" />
						<FormGroup 
							type="password"
							label="Password"
							defaultValue="qwerty12345" />
							<input type="submit" />
						<ButtonBase type="submit" className="btn primary-btn">
							Login
						</ButtonBase>
					</form>
				</div>
			</div>
		)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.history.push('/')
	}
}

export default Auth