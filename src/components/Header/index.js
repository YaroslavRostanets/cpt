import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

class Header extends Component {

	render() {
		const { pathname } = window.location;
		const { user } = this.props;
		const button = (pathname === '/') ? 
						(<Link className="link" to="/settings">
							<ButtonBase className="btn primary-btn">
								<FontAwesomeIcon icon="cogs"/>
								Settings
							</ButtonBase>
						</Link>)
						:
						(<Link className="link" to="/">
							<ButtonBase className="btn primary-btn">
								<i className="fa fa-table" aria-hidden="true"></i>
								Back to table
							</ButtonBase>
						</Link>)

		return(
			<div id="header">
				<div className="left-part">
					<div className="app-name">
						Capacity Planning Tool
					</div>
					{ user.role === "admin" ? button : null }
				</div>
				<div className="right-part">
					<div className="user">
						<div className="name">John Smith</div>
						<div className="role">Administrator</div>
					</div>
					<ButtonBase className="logout">
						<FontAwesomeIcon icon="sign-out-alt" />
					</ButtonBase>
				</div>
			</div>
		)
	}
}

export default Header