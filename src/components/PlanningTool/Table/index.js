import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { CircularProgress } from '@material-ui/core';
import './styles.scss';

class Table extends Component {

	render() {
		const { tableRows, hiddenCols, filterOptions, fetching } = this.props;
		const { saveTableCellAction } = this.props;

		return(
			<Scrollbars id="planning-table">
				{ fetching ? 
					<div className="fetch-wrap">
						<div className="cover">
							<CircularProgress  className="loader" size={40} />
						</div>
					</div>
					: 
					null }
				<table className="printable-table">
					<tbody>
						{(tableRows[0]) ? <TableHead 
							rows={tableRows} 
							row={tableRows[0]} 
							hiddenCols={hiddenCols} /> : null }
						{ tableRows.map((row, index)=>(
							<TableRow 
								key={index} 
								row={row} 
								hiddenCols={hiddenCols} 
								filterOptions={filterOptions}
								saveTableCellAction={saveTableCellAction}
								/>
						))}
						
					</tbody>
				</table>
			</Scrollbars>
			
		)
	}
}

export default Table