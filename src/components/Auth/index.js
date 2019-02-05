import React, { Component } from 'react';
import { FormGroup } from '../ui/FormGroup';
import ButtonBase from '@material-ui/core/ButtonBase';
import classNames from 'classnames';
import './styles.scss';


class Auth extends Component {



	render() {

		return(
			<div id="auth">
				<div className="auth-window">
					<div className="title">
						Autorization to Capacity Planning Tool
					</div>
					<div className="body">
						<FormGroup 
							type="text"
							label="Login"
							defaultValue="somelogin@com.en" />
						<FormGroup 
							type="password"
							label="Password"
							defaultValue="qwerty12345" />
						<ButtonBase className="btn primary-btn">
							Login
						</ButtonBase>
					</div>
				</div>
			</div>
		)
	}
}

export default Auth