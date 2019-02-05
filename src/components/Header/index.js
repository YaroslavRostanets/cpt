import React, { Component } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
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
						Settings
					</ButtonBase>
				</div>
				<div className="right-part">
					<div className="user">
						<div className="name">John Smith</div>
						<div className="role">Administrator</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header