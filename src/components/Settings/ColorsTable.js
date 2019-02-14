import React, { Component } from 'react';
import ColorSelect from '../ui/ColorSelect';

class ColorsTable extends Component {

	constructor(props) {
		super(props);
		//this.state
	}

	render() {
		const { title, capacity } = this.props;

		const getCapacityRow = (capacity, days) => {
			let capacityRow = capacity.find((item)=>( item.days === days ));

			if (capacityRow) {
				return (
					<tr>
						<td>M-F</td>
						<td>
							<input type="text" defaultValue={capacityRow.hours_start} />
						</td>
						<td>
							<input type="text" defaultValue={capacityRow.hours_end} />
						</td>
						<td>
							<ColorSelect />
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
}

export default ColorsTable