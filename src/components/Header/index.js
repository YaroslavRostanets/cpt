import React, { Component } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

class Header extends Component {

	render() {

		return(
			<div id="header">
				<div className="left-part">
					<div className="app-name">
						Capacity Planning Tool
					</div>
					<ButtonBase className="btn primary-btn">
						<FontAwesomeIcon icon="cogs"/>
						Settings
					</ButtonBase>
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