import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TableControll from './TableControll';
import Table from './Table';
import { TableLegend } from './TableLegend';
import { getPlanningHours } from '../../actions/toolActions';
import { colDisplayChange } from '../../actions/uiActions';
import './styles.scss';
import './print.scss';

class PlanningTool extends Component {

	render() {
		const { getPlanningHoursAction, colDisplayChangeAction } = this.props;
		const { fetching, tableRows, hiddenCols, filterOptions } = this.props;
		return(
			<div id="content-tool">
				<TableControll 
					getPlanningHoursAction={getPlanningHoursAction}
					colDisplayChange={colDisplayChangeAction}
					hiddenCols={hiddenCols}
					 />
				<Table 
					tableRows={tableRows} 
					fetching={fetching} 
					hiddenCols={hiddenCols}
					filterOptions={filterOptions}
					/>
				<TableLegend />
			</div>
		)
	}
}

const mapStateToProps = store => {
  	return {
    	fetching: store.tool.fetching,
    	tableRows: store.tool.tableRows,
    	filterOptions: store.tool.filter,
    	hiddenCols: store.ui.hiddenCols
  	}
}

const mapDispatchToProps = dispatch => {
  	return {
    	getPlanningHoursAction: (date, selected) => dispatch(getPlanningHours(date, selected)),
    	colDisplayChangeAction: col => dispatch(colDisplayChange(col))
  	}
}


export default connect(mapStateToProps,  mapDispatchToProps)(PlanningTool)
