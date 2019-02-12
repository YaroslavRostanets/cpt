import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import TableHead from './TableHead';
import TableRow from './TableRow';
import './styles.scss';

class Table extends Component {

	render() {
		const { tableRows } = this.props;

		return(
			<Scrollbars id="planning-table">
				<table className="printable-table">
					<tbody>
						{(tableRows[0]) ? <TableHead row={tableRows[0]} /> : null }
						{ tableRows.map((row, index)=>(
							<TableRow key={index} row={row} />
						))}
						
					</tbody>
			</table>
			</Scrollbars>
			
		)
	}
}

export default Table