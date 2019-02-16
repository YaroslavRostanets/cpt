import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TableControll from './TableControll';
import Table from './Table';
import { TableLegend } from './TableLegend';
import { getPlanningHours, saveTableCell } from '../../actions/toolActions';
import { colDisplayChange } from '../../actions/uiActions';
import { getTimeline, getCapacity } from '../../actions/settingsActions';
import './styles.scss';
import './print.scss';

class PlanningTool extends Component {

	render() {
		const { 
			getPlanningHoursAction, 
			colDisplayChangeAction,
			saveTableCellAction, 
			getTimelineAction,
			getCapacityAction
			 } = this.props;
		const { fetching, tableRows, hiddenCols, filterOptions, timeline, capacity } = this.props;
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
					saveTableCellAction={saveTableCellAction}
					timeline={timeline}
					getTimelineAction={getTimelineAction}
					capacity={capacity}
					getCapacityAction={getCapacityAction}
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
    	hiddenCols: store.ui.hiddenCols,
    	timeline: store.settings.timeline,
    	capacity: store.settings.capacity
  	}
}

const mapDispatchToProps = dispatch => {
  	return {
    	getPlanningHoursAction: (date, selected) => dispatch(getPlanningHours(date, selected)),
    	saveTableCellAction: (savedObject, date) => dispatch(saveTableCell(savedObject, date)),
    	colDisplayChangeAction: col => dispatch(colDisplayChange(col)),
    	getTimelineAction: () => dispatch(getTimeline()),
    	getCapacityAction: () => dispatch(getCapacity())
  	}
}


export default connect(mapStateToProps,  mapDispatchToProps)(PlanningTool)
