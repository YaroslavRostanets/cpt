import React, { Component } from 'react';
import { ButtonBase } from '@material-ui/core';

class TableHeadCell extends Component {

	sortHandler(fieldName, index) {
		this.props.sortedByFieldAction(fieldName, index);
	}

	render() {

		const { fieldName, title, sortedByField, hiddenCols, sortAscending } = this.props;

		return (
			<th style={{display: hiddenCols[fieldName] ? 'none' : 'table-cell' }}>
				<div>
					{title}
					<ButtonBase 
						onClick={this.sortHandler.bind(this, fieldName, undefined)} 
						className="sort-btn">
						{ sortedByField === fieldName && sortAscending === true ?
							<i className="fa fa-angle-up" aria-hidden="true"></i>
							: 
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						}
					</ButtonBase>
				</div>
			</th>
		)
	}
}

export default TableHeadCell