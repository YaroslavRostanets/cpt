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

		return(
			<div id="content-tool">
				<TableControll getPlanningHoursAction={getPlanningHoursAction} />
				<Table />
				<TableLegend />
			</div>
		)
	}
}

const mapStateToProps = store => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlanningHoursAction: () => dispatch(getPlanningHours())
  }
}


export default connect(mapStateToProps,  mapDispatchToProps)(PlanningTool)
