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
		console.log('handler');
		clearTimeout(this.timerId);
		const { filterOptions, rowNo, hoursNo, timeline } = this.props;

		var value = e.currentTarget.value.replace(/[^\d\.]/g, "");
			if( !isNaN(value.substr(-1)) ) {
				value = parseFloat(value ? value : 0);
				value = value.toFixed(2);
			}
		const parseValue = parseFloat(value ? value : 0);
		
			this.setState({
				data: {...this.state.data, hours: value }
			}, () => {
				console.log('save?: ', !isNaN(value.substr(-1)) );
				if ( !isNaN(value.substr(-1)) ) {
					this.props.recalculationTableAction(rowNo, hoursNo, parseValue, timeline);

					this.timerId = setTimeout(() => {
						let dataCopy = {...this.state.data, 
								hours: parseValue};
							if (dataCopy.id === 0) {
								delete dataCopy.id
							}

						let saveCell = {
							'cost_centers': filterOptions.selected,
							'date': Math.round(new Date(filterOptions.date).getTime() / 500),
							'data': dataCopy
						}

						this.props.saveTableCellAction(saveCell, this.props.timeline);

					}, 1000);
				}

			});
		

	}

	render(){

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