import React, { Component } from 'react';
import ColorSelect from '../ui/ColorSelect';
import { availableColors } from '../../constants';

class ColorsTable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			capacity: this.props.capacity
		}

	}

	handlerHoursChange(capacityRow, e) {
		let { id } = capacityRow;
		let fieldName = e.target.name;
		let value = Number( e.target.value.replace(/\D/,'') );
		let capacityCopy = [...this.state.capacity];
		let index = capacityCopy.findIndex((item)=>(item.id === id));
			capacityCopy[index][fieldName] = value;

		this.setState({
			capacity: capacityCopy
		}, this.props.pushToSave(capacityRow));

	}

	handlerColorChange(capacityRow, value) {;
		let { id } = capacityRow;
		let fieldName = 'color_code';
		let capacityCopy = [...this.state.capacity];

		let index = capacityCopy.findIndex((item)=>(item.id === id));
			capacityCopy[index][fieldName] = value;

		this.setState({
			capacity: capacityCopy
		}, this.props.pushToSave(capacityRow));
	}

	render() {
		const { title } = this.props;
		const { capacity } = this.state;

		const getCapacityRow = (capacity, days) => {
			let capacityRow = capacity.find((item)=>( item.days === days ));

			if (capacityRow) {
				return (
					<tr>
						<td>
							{(() => {
                				switch(capacityRow.days) {
                					case 'work':
                						return 'M-F';
                					case 'sat':
                						return 'Sat';
                					case 'sun':
                						return 'Sun';
                					default:
                						return null;
                				}
            				})()}
						</td>
						<td>
							<input type="text"
								name="hours_start"
								onChange={this.handlerHoursChange.bind(this, capacityRow)} 
								value={capacityRow.hours_start || ''} />
						</td>
						<td>
							<input type="text"
								name="hours_end"
								onChange={this.handlerHoursChange.bind(this, capacityRow)} 
								value={capacityRow.hours_end || ''} />
						</td>
						<td>
							<ColorSelect 
								selectedColor={capacityRow.color_code || '-'} 
								availableColors={availableColors}
								handlerColorChange={this.handlerColorChange.bind(this, capacityRow)}
							/>
						</td>
					</tr>
				)
			}
			return null;
		}

		return(
			<table className="colors-table">
				<tbody>
					<tr>
						<th></th>
						<th colSpan="3">
							{title}
						</th>
					</tr>
					{ getCapacityRow(capacity, 'work') }
					{ getCapacityRow(capacity, 'sat') }
					{ getCapacityRow(capacity, 'sun') }
				</tbody>
			</table>
		)
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			capacity: nextProps.capacity
		})
	}
}



export default ColorsTable