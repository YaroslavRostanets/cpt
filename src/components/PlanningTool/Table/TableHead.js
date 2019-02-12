import React, { Component } from 'react';

class TableHead extends Component {

	render() {

		const { row } = this.props;
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

		return(
			<tr>
					<th>
						Cost Center
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Job #
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Customer
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Description
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Date In
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Date Due
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Partial Due
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Days Available
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Hrs. Planed
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th>
						Required Days
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th style={{borderRight: '3px solid rgb(208, 208, 208)'}}>
						Allocated Hours
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					{ 
						planning_hours.map((item, index)=>(
						<th key={index} className="day">
							<div>{getWeekDay(item.date)}</div>
							<div>{getDate(item.date)} {getMonth(item.date)}</div>
							<div>30,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</th>
					)) }
					{/*
					<th className="day" style={{background: '#FCC99A', 
					borderLeft: '3px solid rgb(208, 208, 208)'}}>
						<div>Mon</div>
						<div>09 Oct</div>
						<div>255,21</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Tues</div>
						<div>10 Oct</div>
						<div>30,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Wed</div>
						<div>11 Oct</div>
						<div>32,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Thu</div>
						<div>12 Oct</div>
						<div>30,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#EB9DA6'}}>
						<div>Fri</div>
						<div>13 Oct</div>
						<div>520,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day">
						<div>Sun</div>
						<div>14 Oct</div>
						<div></div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day">
						<div>Sat</div>
						<div>15 Oct</div>
						<div></div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Mon</div>
						<div>16 Oct</div>
						<div>255,21</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Tues</div>
						<div>17 Oct</div>
						<div>30,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Wed</div>
						<div>18 Oct</div>
						<div>32,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Thu</div>
						<div>19 Oct</div>
						<div>30,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day" style={{background: '#A5DBA8'}}>
						<div>Fri</div>
						<div>20 Oct</div>
						<div>520,00</div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day">
						<div>Sun</div>
						<div>21 Oct</div>
						<div></div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day">
						<div>Sat</div>
						<div>22 Oct</div>
						<div></div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day">
						<div>W/E</div>
						<div>23 Oct</div>
						<div></div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
					<th className="day">
						<div>W/E</div>
						<div>24 Oct</div>
						<div></div>
						<i className="fa fa-angle-down" aria-hidden="true"></i>
					</th>
				*/}
				</tr>
		)
	}
}

export default TableHead