import React, { Component } from 'react';

class TableRow extends Component {

	render() {

		const { row, hiddenCols } = this.props;
		const { planning_hours } = row;

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
				<td style={{display: hiddenCols['costCenter'] ? 'none' : 'table-cell'}}>
					{row.costCenter}
				</td>
				<td style={{display: hiddenCols['jobno'] ? 'none' : 'table-cell'}}>
					{row.jobno}
				</td>
				<td style={{display: hiddenCols['customer'] ? 'none' : 'table-cell'}}>
					{row.customer}
				</td>
				<td style={{display: hiddenCols['description'] ? 'none' : 'table-cell'}}>
					{row.description}
				</td>
				<td style={{display: hiddenCols['dateIn'] ? 'none' : 'table-cell'}}>
					{ dateFormat(new Date(row.dateIn).getTime()) }
				</td>
				<td style={{display: hiddenCols['dateDue'] ? 'none' : 'table-cell'}}>
					{ dateFormat(new Date(row.dateDue).getTime()) }
				</td>
				<td style={{display: hiddenCols['partialDue'] ? 'none' : 'table-cell'}}>
					{row.partialDue}
				</td>
				<td style={{display: hiddenCols['daysAvailable'] ? 'none' : 'table-cell'}}>
					{row.daysAvailable}
				</td>
				<td style={{display: hiddenCols['hrsPlaned'] ? 'none' : 'table-cell'}}>
					{row.hoursPlanned}
				</td>
				<td style={{display: hiddenCols['requiredDays'] ? 'none' : 'table-cell' }}>
					0
				</td>
				<td style={{borderRight: '3px solid rgb(208, 208, 208)', 
					display: hiddenCols['allocatedHours'] ? 'none' : 'table-cell' }}>
					5
				</td>
				{ 
					planning_hours.map((item, index)=>(
						<td key={index}>
							<input type="text" 
								pattern="[0-9]*" 
								defaultValue={ item.hours ? item.hours : ""}
								 />
						</td>
					)) 
				}
			</tr>
		)
	}
}

export default TableRow
