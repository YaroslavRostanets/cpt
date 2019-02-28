import React, { Component } from 'react';
import CustomInput from './CustomInput';

class TableRow extends Component {

	render() {

		const { row, rowNo, hiddenCols, filterOptions, timeline } = this.props;

		const { planning_hours } = row;
		const { saveTableCellAction, recalculationTableAction } = this.props;

		const dateFormat = (timestamp) => {
			let newDate = new Date(timestamp);
			let dd = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate(); 
			let mm = (newDate.getMonth() + 1 ) < 10 ? '0' + (newDate.getMonth() + 1 ) : (newDate.getMonth() + 1 ); 
				//January is 0!
			let yy = String(newDate.getFullYear()).substring(2);
			
			return `${dd}/${mm}/${yy}`;
		}

		return(
			<tr datay={rowNo}>
				<td style={{display: hiddenCols['cost_center_label'] ? 'none' : 'table-cell'}}>
					{row.cost_center_label}
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
				<td className="date-cell" style={{display: hiddenCols['Date_In'] ? 'none' : 'table-cell'}}>
					{ dateFormat(row.Date_In) }
				</td>
				<td className="date-cell" style={{display: hiddenCols['Date_Due'] ? 'none' : 'table-cell'}}>
					{ dateFormat(row.Date_Due) }
				</td>
				<td className="date-cell" style={{display: hiddenCols['Partial_Due'] ? 'none' : 'table-cell'}}>
					{ row.Partial_Due ? dateFormat( row.Partial_Due ) : null }
				</td>
				<td style={{display: hiddenCols['Days_Available'] ? 'none' : 'table-cell'}}>
					{ row.Days_Available }
				</td>
				<td style={{display: hiddenCols['Hrs_planed'] ? 'none' : 'table-cell'}}>
					{ row.Hrs_planned.toFixed(2) }
				</td>
				<td style={{display: hiddenCols['Required_Days'] ? 'none' : 'table-cell' }}>
					{ row.Required_Days }
				</td>
				<td style={{display: hiddenCols['Allocated_Hours'] ? 'none' : 'table-cell' }}>
					{row.Allocated_Hours}
				</td>
				{ 
					planning_hours.map((item, index)=>{
						/*------------------------------------*/
						/*let propName = Object.keys(item).pop();
							item = item[propName];*/
						/*------------------------------------*/
						return (
							<td key={index}
							className="day"
							style={{borderLeft: index === 0 ? '3px solid rgb(208, 208, 208)' : null}} >
								<CustomInput 
									value={ item.hours } 
									data={item} 
									filterOptions={filterOptions}
									timeline={timeline}
									row={row}
									hoursNo={index}
									rowNo={rowNo}
									saveTableCellAction={saveTableCellAction}
									recalculationTableAction={recalculationTableAction}
									/>
							</td>
						)
					}) 
				}
			</tr>
		)
	}

}

export default TableRow
