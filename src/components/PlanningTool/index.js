import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import TableControll from './TableControll';
import Table from './Table';
import { TableLegend } from './TableLegend';
import { getPlanningHours } from '../../actions/toolActions';
import './styles.scss';
import './print.scss';

class PlanningTool extends Component {

	render() {
		const { getPlanningHoursAction } = this.props;
		const { fetching, tableRows } = this.props;

		return(
			<div id="content-tool">
				<TableControll getPlanningHoursAction={getPlanningHoursAction} />
				<Table tableRows={tableRows} fetching={fetching} />
				<TableLegend />
			</div>
		)
	}
}

const mapStateToProps = store => {
  	return {
    	fetching: store.tool.fetching,
    	tableRows: store.tool.tableRows
  	}
}

const mapDispatchToProps = dispatch => {
  	return {
    	getPlanningHoursAction: (date, selected) => dispatch(getPlanningHours(date, selected))
  	}
}


export default connect(mapStateToProps,  mapDispatchToProps)(PlanningTool)
