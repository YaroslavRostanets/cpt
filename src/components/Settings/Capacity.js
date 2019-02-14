import React, { Component } from 'react';
import { ButtonBase } from '@material-ui/core';
import ColorsTable from './ColorsTable';

class Capacity extends Component {

	render() {
		return(
			<div className="standarts-colors std-block">
				<div className="title">
					Colors for standarts
				</div>
				<div className="tables">
					<ColorsTable title="Standard" />
					<ColorsTable title="Over Time" />
					<ColorsTable title="Over Capacity" />
				</div>
				<ButtonBase className="btn primary-btn">
					Save
				</ButtonBase>
			</div>
		)
	}

	componentDidMount() {
		this.props.getCapacity();
	}
}

export default Capacity