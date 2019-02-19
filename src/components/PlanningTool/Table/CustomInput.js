import React, { Component } from 'react';

class CustomInput extends Component {

	constructor(props){
		super(props);
		this.input = React.createRef();
		this.state = {
			data: this.props.data,
			initialHours: this.props.data.hours
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(e) {
		console.log('handler');
		const { filterOptions, rowNo, hoursNo, timeline } = this.props;

		var value = e.currentTarget.value.replace(/[^\d\.]/g, "");
			value = value.length === 1 && isNaN(value.substr(-1)) === true ? '0' : value;
		console.log(value);

		var valueArr = value.split('.', 2);
			if (valueArr[1]) {
				valueArr[1] = valueArr[1].length > 1 ? valueArr[1].substr(0,2) : valueArr[1];
			}
			value = valueArr.length > 1 ? valueArr.join('.') : value;

			this.setState({
				data: {...this.state.data, hours: value }
			}, () => {
				const parseValue = parseFloat(value);
				this.props.recalculationTableAction(rowNo, hoursNo, parseValue, timeline);
				/*if ( !isNaN(value.substr(-1)) ) {
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
				}*/

			});
	}

	handleBlur(e) {
		console.log('blur1', e);
		this.setState({
			data: {...this.state.data, hours: parseFloat(this.state.data.hours) }
		})
	}


	render(){

		const { rowNo, hoursNo } = this.props;

		return (
			<input type="text"
				datarow={rowNo}
				datacol={hoursNo}
				ref={this.input} 
				value={ this.state.data.hours ? this.state.data.hours : '' }
				onBlur= { this.handleBlur }
				onChange={this.handleChange}
			/>
		)
	}

	componentWillReceiveProps(nextProps) {
		/*this.setState({
			data: nextProps.data
		})*/
	}

	componentDidMount() {
		const { filterOptions, rowNo, hoursNo, timeline } = this.props;
		const input = this.input.current;
		const scanCodes = {
			'enter': 13,
			'esc': 27,
			'tab': 9,
			'topArrow': 38,
			'downArrow': 40,
			'leftArrow': 37,
			'rightArrow': 39
		}
		
		input.addEventListener("keydown", (e)=>{

			if (e.keyCode === scanCodes.esc) {
				input.blur();
				return false;
			}
			const row = input.getAttribute('datarow');
			const col = input.getAttribute('datacol');
			const nextCoords = {
			  	row: row,
			  	col: col
			  }
			switch (e.keyCode) {
			  case scanCodes.enter:
			  	nextCoords.col = Number(nextCoords.col) + 1;
			    break;
			  case scanCodes.tab:
			  	nextCoords.col = Number(nextCoords.col) + 1;
			    break;
			  case scanCodes.topArrow:
			  	nextCoords.row = Number(nextCoords.row) - 1;
			    break;
			  case scanCodes.downArrow:
			  	nextCoords.row = Number(nextCoords.row) + 1;
			    break;
			  case scanCodes.leftArrow:
			  	nextCoords.col = Number(nextCoords.col) - 1;
			    break;
			  case scanCodes.rightArrow:
			  	nextCoords.col = Number(nextCoords.col) + 1;
			    break;
			   default: 
			   	return false;
			}
			const next = document.querySelector(`[datarow="${nextCoords.row}"][datacol="${nextCoords.col}"]`);
			if(next) {
				this.setState({
					data: {...this.state.data, hours: parseFloat(this.state.data.hours) }
				}, ()=>{
					this.props.recalculationTableAction(rowNo, hoursNo, this.state.data.hours, timeline);

					let dataCopy = {...this.state.data, hours: this.state.data.hours};
									if (dataCopy.id === 0) {
										delete dataCopy.id
									}

					let saveCell = {
							'cost_centers': filterOptions.selected,
							'date': Math.round(new Date(filterOptions.date).getTime() / 500),
							'data': dataCopy
						}

					if( this.state.data.hours !== this.state.initialHours ) {
						console.log('save: ', saveCell);
						this.props.saveTableCellAction(saveCell, this.props.timeline);
					}
					

				});
				next.focus();
			}
		});
	}

}

export default CustomInput