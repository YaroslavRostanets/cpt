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
		const { rowNo, hoursNo, timeline } = this.props;

		var value = e.currentTarget.value.replace(/[^\d\.]/g, "");
			value = value.length === 1 && isNaN(value.substr(-1)) === true ? '0.' : value;

		var valueArr = value.split('.', 2);
			if (valueArr[1]) {
				valueArr[1] = valueArr[1].length > 1 ? valueArr[1].substr(0,2) : valueArr[1];
			}
			value = valueArr.length > 1 ? valueArr.join('.') : value;

			this.setState({
				data: {...this.state.data, hours: value }
			}, () => {
				const parseValue = (value === '') ? 0 : parseFloat(value);
				this.props.recalculationTableAction(rowNo, hoursNo, parseValue, timeline);

			});
	}

	handleBlur(e) {
		const { filterOptions } = this.props;
		const timezoneOffset = (filterOptions.date.getTimezoneOffset() * 60 * 1000 * -1 );
		var nowUTCDateUnix = new Date(filterOptions.date);
			nowUTCDateUnix.setHours(0,0,0,0);
			nowUTCDateUnix = Math.floor( (nowUTCDateUnix.getTime() + timezoneOffset) / 1000);

		if(!this.state.lastCode) {
			let dataCopy = {...this.state.data, hours: this.state.data.hours ? this.state.data.hours : 0};
								if (dataCopy.id === 0) {
									delete dataCopy.id
								}

			let saveCell = {
				'cost_centers': filterOptions.selected,
				'date': nowUTCDateUnix,
				'data': dataCopy
						}

			if ( this.state.data.hours !== this.state.initialHours ) {
				
				this.setState({
					initialHours: this.state.data.hours
				});
					if (this.state.data.hours === '0'
						|| this.state.data.hours === '0.'
						|| this.state.data.hours === 0 
						|| this.state.data.hours === '') {
						this.props.deleteTableCellAction(this.state.data.id);
					} else {
						this.props.saveTableCellAction(saveCell, this.props.timeline);
					}
				}

		} 
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
		//если парсенные значения совпадают - не перестраивать
		//если джоба изменилась с новыми пропс в этот день, значит сортировка
		if( nextProps.data.id !== this.state.data.id ||
			nextProps.data.internal_task_id !== this.state.data.internal_task_id ) {
			this.setState({
				data: nextProps.data,
				initialHours: nextProps.data.hours
			})
		}
	}

	componentDidMount() {
		const { rowNo, hoursNo, timeline } = this.props;
		const input = this.input.current;
		const scanCodes = {
			'enter': 13,
			'esc': 27,
			'tab': 9,
			'topArrow': 38,
			'downArrow': 40,
			'leftArrow': 37,
			'rightArrow': 39,
			'delete': 46
		}
		
		input.addEventListener("keydown", (e)=>{
			if (e.keyCode === scanCodes.esc) {
				this.setState({
					lastCode: e.keyCode
				}, ()=>{
					input.blur();
					this.setState({
						lastCode: '',
						data: {...this.state.data, hours: this.state.initialHours },
					}, ()=>{
						this.props.recalculationTableAction(rowNo, hoursNo, this.state.initialHours, timeline);
					});
				});
				return false;
			}
			if (e.keyCode === scanCodes.delete) {
				this.setState({
					data: {...this.state.data, hours: 0 }
				}, ()=>{
					this.props.recalculationTableAction(rowNo, hoursNo, 0, timeline);
				});
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
					data: {...this.state.data, hours: parseFloat(this.state.data.hours) },
					lastCode: ''
				}, ()=>{
					next.focus();
				});
				
			}
		});
	}

}

export default CustomInput