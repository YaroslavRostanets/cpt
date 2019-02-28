import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableControll from './TableControll';
import Table from './Table';
import { TableLegend } from './TableLegend/index.js';
import { getPlanningHours, 
		saveTableCell,
		deleteTableCell,
		recalculationTable, 
		sortedByField } from '../../actions/toolActions';
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
			deleteTableCellAction,
			getTimelineAction,
			getCapacityAction,
			sortedByFieldAction,
			recalculationTableAction
			 } = this.props;
		const { fetching, 
				tableRows, 
				hiddenCols, 
				filterOptions, 
				timeline, 
				capacity, 
				sortedByField, 
				sortedByIndex,
				sortAscending,
				user } = this.props;
		return(
			<div id="content-tool">
				<TableControll 
					getPlanningHoursAction={getPlanningHoursAction}
					colDisplayChange={colDisplayChangeAction}
					hiddenCols={hiddenCols}
					timeline={timeline}
					filterOptions={filterOptions}
					tableRows={tableRows} 
					 />
				<Table 
					tableRows={tableRows} 
					fetching={fetching}
					hiddenCols={hiddenCols}
					filterOptions={filterOptions}
					sortedByField={sortedByField}
					sortedByIndex={sortedByIndex}
					sortAscending={sortAscending}
					sortedByFieldAction={sortedByFieldAction}
					saveTableCellAction={saveTableCellAction}
					deleteTableCellAction={deleteTableCellAction}
					recalculationTableAction={recalculationTableAction}
					timeline={timeline}
					getTimelineAction={getTimelineAction}
					capacity={capacity}
					getCapacityAction={getCapacityAction}
					user={user}
					/>
				<TableLegend
					timeline={timeline}
					capacity={capacity}
				 />
			</div>
		)
	}

	componentDidMount() {
		this.props.getTimelineAction();
		this.props.getCapacityAction();
	}

}

const mapStateToProps = store => {
  	return {
    	fetching: store.tool.fetching,
    	tableRows: store.tool.tableRows,
    	filterOptions: store.tool.filter,
    	sortedByField: store.tool.sortedByField,
    	sortedByIndex: store.tool.sortedByIndex,
    	sortAscending: store.tool.sortAscending,
    	hiddenCols: store.ui.hiddenCols,
    	timeline: store.settings.timeline,
    	capacity: store.settings.capacity,
    	user: store.user.user
  	}
}

const mapDispatchToProps = dispatch => {
  	return {
    	getPlanningHoursAction: (date, selected, timeline) => dispatch(getPlanningHours(date, selected, timeline)),
    	recalculationTableAction: (rowNumber, planningHoursNumber, hours, timeline) => dispatch(recalculationTable(rowNumber, planningHoursNumber, hours, timeline)),
    	saveTableCellAction: (savedObject, timeline) => dispatch(saveTableCell(savedObject, timeline)),
    	deleteTableCellAction: (id) => dispatch(deleteTableCell(id)),
    	colDisplayChangeAction: col => dispatch(colDisplayChange(col)),
    	getTimelineAction: () => dispatch(getTimeline()),
    	getCapacityAction: () => dispatch(getCapacity()),
    	sortedByFieldAction: (fieldName, index) => dispatch(sortedByField(fieldName, index))
  	}
}


export default connect(mapStateToProps,  mapDispatchToProps)(PlanningTool)
