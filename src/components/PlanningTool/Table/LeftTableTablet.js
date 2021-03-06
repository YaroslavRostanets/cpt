import React, { Component } from 'react';
import TableHeadCell from './TableHeadCell';

class LeftTableTablet extends Component {

	render() {

		const { tableRows, hiddenCols, sortedByField, sortAscending } = this.props;
		const { sortedByFieldAction } = this.props;

		const dateFormat = (timestamp) => {
			let newDate = new Date(timestamp);
			let dd = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate(); 
			let mm = (newDate.getMonth() + 1 ) < 10 ? '0' + (newDate.getMonth() + 1 ) : (newDate.getMonth() + 1 ); 
				//January is 0!
			let yy = String(newDate.getFullYear()).substring(2);
			
			return `${mm}/${dd}/${yy}`;
		}

		const tooltip = (text, maxlength) => {
			if (text.trim().length > maxlength) {
				return (
					<div className="tooltip-wrap">
						{ text.substring(0, maxlength).trim() + '...' }
						<div className="tooltip">
							{text}
						</div>
					</div>
				);
			} else {
				return text;
			}
		}

		return (
			<table className="tablet-left-table">
				<tbody>
					<tr>
						<TableHeadCell 
							title="Cost Center" 
							fieldName="cost_center_label"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
					 	/>
					 	<TableHeadCell 
							title="Job #" 
							fieldName="jobno"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
						/>
						<TableHeadCell 
							title="Customer" 
							fieldName="customer"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending} 
							/>
						<TableHeadCell 
							title="Description" 
							fieldName="description"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							/>
						<TableHeadCell 
							title="Date In" 
							fieldName="Date_In"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							 />
						<TableHeadCell 
							title="Date Due" 
							fieldName="Date_Due"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							 />
						<TableHeadCell 
							title="Partial Due" 
							fieldName="Partial_Due"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							/>
						<TableHeadCell 
							title="Days Available" 
							fieldName="Days_Available"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							/>
						<TableHeadCell 
							title="Hrs. Planed" 
							fieldName="Hrs_planned"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							/>
						<TableHeadCell 
							title="Required Days" 
							fieldName="Required_Days"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending}
							/>
						<TableHeadCell 
							title="Allocated Hours" 
							fieldName="Allocated_Hours"
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByFieldAction={sortedByFieldAction}
							sortAscending={sortAscending} 
							/>
					</tr>
					{ tableRows.map((row, index) => {
						return (
							<tr key={index}>
								<td style={{display: hiddenCols['cost_center_label'] ? 'none' : 'table-cell'}}>
									{ tooltip(row.cost_center_label, 25) }
								</td>
								<td style={{display: hiddenCols['jobno'] ? 'none' : 'table-cell'}}>
									{row.jobno}
								</td>
								<td style={{display: hiddenCols['customer'] ? 'none' : 'table-cell'}}>
									{ tooltip(row.customer, 22) }
								</td>
								<td style={{display: hiddenCols['description'] ? 'none' : 'table-cell'}}>
									{ tooltip(row.description, 25) }
								</td>
								<td style={{display: hiddenCols['Date_In'] ? 'none' : 'table-cell'}}>
									{ dateFormat(row.Date_In) }
								</td>
								<td style={{display: hiddenCols['Date_Due'] ? 'none' : 'table-cell'}}>
									{ dateFormat(row.Date_Due) }
								</td>
								<td style={{display: hiddenCols['Partial_Due'] ? 'none' : 'table-cell'}}>
									{ row.Partial_Due ? dateFormat( row.Partial_Due ) : null }
								</td>
								<td className={row.Days_Available < 0 ? 'has-error' : null}
									style={{display: hiddenCols['Days_Available'] ? 'none' : 'table-cell'}}>
									{ row.Days_Available }
								</td>
								<td style={{display: hiddenCols['Hrs_planned'] ? 'none' : 'table-cell'}}>
									{ row.Hrs_planned.toFixed(2) }
								</td>
								<td style={{display: hiddenCols['Required_Days'] ? 'none' : 'table-cell' }}>
									{ row.Required_Days }
								</td>
								<td style={{display: hiddenCols['Allocated_Hours'] ? 'none' : 'table-cell' }}>
									{row.Allocated_Hours}
								</td>
							</tr>
						)
					})}
					
				</tbody>
			</table>
		)
	}
}

export default LeftTableTablet