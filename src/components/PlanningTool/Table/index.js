import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import LeftTableTablet from './LeftTableTablet';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { Empty } from './Empty';
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
				sortAscending,
				user } = this.props;
		const { saveTableCellAction,
			deleteTableCellAction,
			sortedByFieldAction, 
			recalculationTableAction } = this.props;

		return(
			<Scrollbars id="planning-table">
				{ fetching ? 
					<div className="fetch-wrap">
						<CircularProgress  className="loader" size={40} />
						<div className="cover"></div>
					</div>
					: 
					null }
					{ !user.is_admin && filterOptions.selected === '' ?
						<Empty text="To display the data, select the date and cost center"/>
					 : null }
					 { !tableRows.length && filterOptions.selected.length ?
						<Empty text="No data available"/>
					 : null }
					{/*------------- only for tablet ----------------*/}
					{tableRows.length ?
						<LeftTableTablet 
						tableRows={tableRows}
						hiddenCols={hiddenCols}
						sortedByField={sortedByField}
						sortedByFieldAction={sortedByFieldAction}
						sortAscending={sortAscending}
						/>
					 : null}
					{/*------------- only for tablet----------------*/}
					{ tableRows.length ?
						<table className="printable-table">
							<tbody>
								<TableHead 
									rows={tableRows} 
									row={tableRows[0]}
									capacity={capacity}
									hiddenCols={hiddenCols}
									sortedByField={sortedByField}
									sortedByIndex={sortedByIndex}
									sortAscending={sortAscending}
									sortedByFieldAction={sortedByFieldAction} />
								{ tableRows.map((row, index)=>(
									<TableRow 
										key={index}
										rowNo={index}
										row={row} 
										hiddenCols={hiddenCols} 
										filterOptions={filterOptions}
										saveTableCellAction={saveTableCellAction}
										deleteTableCellAction={deleteTableCellAction}
										recalculationTableAction={recalculationTableAction}
										timeline={timeline}
										/>
								))}
								
							</tbody>
						</table>
					 : null }
			</Scrollbars>
			
		)
	}

}

export default Table