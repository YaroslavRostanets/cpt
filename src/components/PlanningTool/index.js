import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableControll from './TableControll';
import Table from './Table';
import { TableLegend } from './TableLegend/index.js';
import { getPlanningHours, 
		saveTableCell, 
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
			getTimelineAction,
			getCapacityAction,
			sortedByFieldAction
			 } = this.props;
		const { fetching, 
				tableRows, 
				hiddenCols, 
				filterOptions, 
				timeline, 
				capacity, 
				sortedByField, 
				sortedByIndex } = this.props;
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
					sortedByFieldAction={sortedByFieldAction}
					saveTableCellAction={saveTableCellAction}
					timeline={timeline}
					getTimelineAction={getTimelineAction}
					capacity={capacity}
					getCapacityAction={getCapacityAction}
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
    	hiddenCols: store.ui.hiddenCols,
    	timeline: store.settings.timeline,
    	capacity: store.settings.capacity
  	}
}

const mapDispatchToProps = dispatch => {
  	return {
    	getPlanningHoursAction: (date, selected, timeline) => dispatch(getPlanningHours(date, selected, timeline)),
    	saveTableCellAction: (savedObject, timeline) => dispatch(saveTableCell(savedObject, timeline)),
    	colDisplayChangeAction: col => dispatch(colDisplayChange(col)),
    	getTimelineAction: () => dispatch(getTimeline()),
    	getCapacityAction: () => dispatch(getCapacity()),
    	sortedByFieldAction: (fieldName, sortType, index) => dispatch(sortedByField(fieldName, sortType, index))
  	}
}


export default connect(mapStateToProps,  mapDispatchToProps)(PlanningTool)
