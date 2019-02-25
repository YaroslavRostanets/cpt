import React, { Component } from 'react';
import { ButtonBase, CircularProgress } from '@material-ui/core';
import ColorsTable from './ColorsTable';

class Capacity extends Component {

	constructor(props) {
		super(props)

		this.working = [];
		this.overTime = [];
		this.overCapacity = [];
		
		this.forSave = [];

		this.saveHandler = this.saveHandler.bind(this);
		this.pushToSave = this.pushToSave.bind(this);
	}

	pushToSave(oneRow) {
		let index = this.forSave.findIndex((item) => ( item.id === oneRow.id ));

		if(~index) {
			this.forSave.splice(index, 1, oneRow);
		} else {
			this.forSave.push(oneRow);
		}

	}

	saveHandler() {
		this.props.setCapacity(this.forSave);
	}

	render() {

		const { capacityFetching, capacityBtnFetching } = this.props;

		return(
			<div className="standarts-colors std-block">
				<div className="title">
					Capacity Definition
				</div>
				{ capacityFetching ? 
					<CircularProgress  className="loader" size={40} /> 
					:
					<div>
						<div className="tables">
							<ColorsTable 
								capacity={this.working} 
								title="Standard" 
								pushToSave={this.pushToSave}
								/>
							<ColorsTable 
								capacity={this.overTime} 
								title="Over Time" 
								pushToSave={this.pushToSave}
								/>
							<ColorsTable 
								capacity={this.overCapacity} 
								title="Over Capacity" 
								pushToSave={this.pushToSave}
								/>
						</div>
						<ButtonBase onClick={this.saveHandler} 
							className={capacityBtnFetching ? "btn primary-btn fetching" : "btn primary-btn" }>
							{capacityBtnFetching ? <CircularProgress className="loader" size={20} /> : null}
							Save
						</ButtonBase>
					</div>
				 }

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
		this.forSave = [];
		nextProps.capacity.forEach((item)=>{
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
  				default: 
  					break;
			}
		});
	}
}

export default Capacity