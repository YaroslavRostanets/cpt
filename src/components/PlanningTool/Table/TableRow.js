import React, { Component } from 'react';

class TableRow extends Component {

	render() {

		const { row } = this.props;
		const dateFormat = (timestamp) => {
			let newDate = new Date(timestamp);
			let dd = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate(); 
			let mm = (newDate.getMonth() + 1 ) < 10 ? '0' + (newDate.getMonth() + 1 ) : (newDate.getMonth() + 1 ); 
				//January is 0!
			let yy = String(newDate.getFullYear()).substring(2);
			
			return `${dd}/${mm}/${yy}`;
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
					{ dateFormat(new Date(row.dateDue).getTime()) }
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
					temporarily empty
				</td>
				<td>
					5
				</td>
				{/*
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
			*/}
			</tr>
		)
	}
}

export default TableRow
