import React, { Component } from 'react';

class TableRow extends Component {

	render() {

		const { row } = this.props;
		const dateFormat = (timestamp) => {
			let newDate = new Date(timestamp);
			
			return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getYear()}`;
		}

		return(
			<tr>
				<td>
					{row.costCenter}
				</td>
				<td>
					{row.jobno}
				</td>
				<td>
					{row.customer}
				</td>
				<td>
					{row.description}
				</td>
				<td>
					{ dateFormat(new Date(row.dateIn).getTime()) }
				</td>
				<td>
					{row.dateDue}
				</td>
				<td>
					{row.partialDue}
				</td>
				<td>
					{row.daysAvailable}
				</td>
				<td>
					{row.hoursPlanned}
				</td>
				<td>
					
				</td>
				<td style={{borderRight: '3px solid #D0D0D0'}}>
					17.02
				</td>
				<td style={{borderLeft: '3px solid #D0D0D0'}}>
					<input type="text" defaultValue="17.2"/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
				<td>
					<input type="text" defaultValue=""/>
				</td>
			</tr>
		)
	}
}

export default TableRow
