import React, { Component } from 'react';
import Header from '../Header';
import TableControll from './TableControll';
import Table from './Table';
import './styles.scss';

class PlanningTool extends Component {

	render() {


		return(
			<div id="planning-tool">
				<Header />
				<div className="content">
					<div id="content-tool">
						<TableControll />
						<Table />
					</div>
				</div>
			</div>
		)
	}
}

export default PlanningTool