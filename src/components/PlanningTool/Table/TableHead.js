import React, { Component } from 'react';

class TableHead extends Component {

	render() {
		const { rows, row, hiddenCols } = this.props;
		const { planning_hours } = row;

		const getDate = (timestamp) => ( new Date(timestamp).getDate() );
		const getWeekDay = (timestamp) => {
			let index = new Date(timestamp).getDay();
			let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

			return days[index];
		};
		const getMonth = (timestamp) => {
			var index = new Date(timestamp).getMonth();
			let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

			return months[index];
		}

		const getSumByDay = (index) => {
			var sum = 0;
			
			rows.forEach((row)=>{
				sum += row.planning_hours[index].hours ? row.planning_hours[index].hours : 0;
			});

			return sum;
		}

		return(
			<tr>
					<th style={{display: hiddenCols['costCenter'] ? 'none' : 'table-cell' }}>
						Cost Center
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['jobno'] ? 'none' : 'table-cell' }}>
						Job #
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['customer'] ? 'none' : 'table-cell' }}>
						Customer
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['description'] ? 'none' : 'table-cell' }}>
						Description
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['dateIn'] ? 'none' : 'table-cell' }}>
						Date In
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['dateDue'] ? 'none' : 'table-cell' }}>
						Date Due
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['partialDue'] ? 'none' : 'table-cell' }}>
						Partial Due
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['daysAvailable'] ? 'none' : 'table-cell' }}>
						Days Available
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['hrsPlaned'] ? 'none' : 'table-cell' }}>
						Hrs. Planed
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{display: hiddenCols['requiredDays'] ? 'none' : 'table-cell' }}>
						Required Days
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{borderRight: '3px solid rgb(208, 208, 208)', 
						display: hiddenCols['allocatedHours'] ? 'none' : 'table-cell' }}>
						Allocated Hours
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					{ 
						planning_hours.map((item, index)=>(
							item.is_weekly ?
								<th key={index} className="day">
									<div>W/E</div>
									<div>{getDate(item.date)} {getMonth(item.date)}</div>
								</th>
								 : 
								<th key={index} className="day">
									<div>{getWeekDay(item.date)}</div>
									<div>{getDate(item.date)} {getMonth(item.date)}</div>
									<div>{getSumByDay(index)}</div>
									<i className="fa fa-angle-down" aria-hidden="true"></i>
								</th>
						
					)) }
				</tr>
		)
	}
}

export default TableHead