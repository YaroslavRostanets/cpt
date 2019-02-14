import React, { Component } from 'react';
import { ButtonBase } from '@material-ui/core';
import ColorsTable from './ColorsTable';

class Capacity extends Component {

	constructor(props) {
		super(props)

		this.working = [];
		this.overTime = [];
		this.overCapacity = [];
		console.log('props:_', this.props);
		
	}

	render() {
		console.log('render___');
		return(
			<div className="standarts-colors std-block">
				<div className="title">
					Colors for standarts
				</div>
				<div className="tables">
					<ColorsTable capacity={this.working} title="Standard" />
					<ColorsTable capacity={this.overTime} title="Over Time" />
					<ColorsTable capacity={this.overCapacity} title="Over Capacity" />
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

	componentWillReceiveProps(nextProps) {
		this.working = [];
		this.overTime = [];
		this.overCapacity = [];
		nextProps.capacity.forEach((item)=>{
			console.log('item: ', item);
			switch(item.working_type) {
  				case 'working':
  					this.working.push(item);
  					break;
  				case 'over time':
  					this.overTime.push(item);
  					break;
  				case 'over capacity':
  					this.overCapacity.push(item);
  					break;
			}
		});
	}
}

export default Capacity