import React, { Component } from 'react';

class CustomInput extends Component {

	constructor(props){
		super(props);
		this.state = {
			data: this.props.data
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		clearTimeout(this.timerId);
		const { filterOptions } = this.props;

		const value = e.currentTarget.value.replace(/[^\d\.]/g, "");

		this.setState({
			data: {...this.state.data, hours: value }
		}, () => {
			this.timerId = setTimeout(() => {
				let dataCopy = {...this.state.data, 
						hours: Math.round( parseFloat(this.state.data.hours) * 100 ) / 100};
					if (dataCopy.id === 0) {
						delete dataCopy.id
					}

				let saveCell = {
					'cost_centers': filterOptions.selected,
					'date': Math.round(new Date(filterOptions.date).getTime() / 1000),
					'data': dataCopy
				}

				//console.log('SO: ', saveCell);
				this.props.saveTableCellAction(saveCell);

			}, 1000);

		});

	}

	render(){

		const { value, row } = this.props;

		return (
			<input type="text" 
				value={ this.state.data.hours ? this.state.data.hours : '' }
				onChange={this.handleChange}
			/>
		)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			data: nextProps.data
		})
	}

}

export default CustomInput