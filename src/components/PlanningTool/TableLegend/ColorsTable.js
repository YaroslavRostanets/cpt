import React, { Component } from 'react';

class ColorsTable extends Component {

	render() {
		const { capacity, title } = this.props;

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
							{capacityRow.hours_start}
						</td>
						<td>
							{capacityRow.hours_end}
						</td>
						<td style={{backgroundColor: capacityRow.color_code}}>
							
						</td>
					</tr>
				)
			}
			return null;
		}


		return(
			<div className="standarts-colors std-block">
					<div className="title">{title}</div>
					<div className="tables">
						<table>
							<tbody>
								{ getCapacityRow(capacity, 'work') }
								{ getCapacityRow(capacity, 'sat') }
								{ getCapacityRow(capacity, 'sun') }
							</tbody>
						</table>
						
					</div>
				</div>
		)
	}
}

export default ColorsTable