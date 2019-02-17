import React, { Component } from 'react';
import { ButtonBase } from '@material-ui/core';

class TableHeadCell extends Component {

	sortHandler(fieldName, sortType, index) {
		console.log('sortedBy: ', fieldName, index);
		this.props.sortedByFieldAction(fieldName, sortType, index);
	}

	render() {

		const { fieldName, title, sortedByField, hiddenCols, sortType } = this.props;

		return (
			<th style={{display: hiddenCols[fieldName] ? 'none' : 'table-cell' }}>
				{title}
				<ButtonBase 
					onClick={this.sortHandler.bind(this, fieldName, sortType, null)} 
					className="sort-btn">
					{ sortedByField === fieldName ?
						<i className="fa fa-angle-up" aria-hidden="true"></i>
						: 
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					}
				</ButtonBase>
			</th>
		)
	}
}

export default TableHeadCell