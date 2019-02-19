import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { CircularProgress } from '@material-ui/core';
import './styles.scss';

class Table extends Component {

	render() {
		const { tableRows, 
				hiddenCols, 
				filterOptions, 
				fetching, 
				timeline, 
				capacity, 
				sortedByField,
				sortedByIndex,
				sortAscending } = this.props;
		const { saveTableCellAction, sortedByFieldAction, recalculationTableAction } = this.props;

		return(
			<Scrollbars id="planning-table">
				{ fetching ? 
					<div className="fetch-wrap">
						<CircularProgress  className="loader" size={40} />
						<div className="cover"></div>
					</div>
					: 
					null }
				<table className="printable-table">
					<tbody>
						{(tableRows[0]) ? <TableHead 
							rows={tableRows} 
							row={tableRows[0]}
							capacity={capacity}
							hiddenCols={hiddenCols}
							sortedByField={sortedByField}
							sortedByIndex={sortedByIndex}
							sortAscending={sortAscending}
							sortedByFieldAction={sortedByFieldAction} /> : null }
						{ tableRows.map((row, index)=>(
							<TableRow 
								key={index}
								rowNo={index}
								row={row} 
								hiddenCols={hiddenCols} 
								filterOptions={filterOptions}
								saveTableCellAction={saveTableCellAction}
								recalculationTableAction={recalculationTableAction}
								timeline={timeline}
								/>
						))}
						
					</tbody>
				</table>
			</Scrollbars>
			
		)
	}

}

export default Table