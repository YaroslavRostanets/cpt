import React, { Component } from 'react';
import { ButtonBase } from '@material-ui/core';
import TableHeadCell from './TableHeadCell';

class TableHead extends Component {

	sortHandler(fieldName, index) {
		this.props.sortedByFieldAction(fieldName, index);
	}

	render() {
		const { rows, row, hiddenCols, capacity, sortedByField, sortedByIndex, sortAscending } = this.props;
		console.log('CAPACITY: ', capacity);
		const { planning_hours } = row;
		const { sortedByFieldAction } = this.props;
		
		const getDate = (timestamp) => ( new Date(timestamp * 1000).getDate() );
		const getWeekDay = (timestamp) => {
			let index = new Date(timestamp * 1000).getDay();
			let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

			return days[index];
		};
		const getMonth = (timestamp) => {
			var index = new Date(timestamp * 1000).getMonth();
			let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

			return months[index];
		}

		const getSumByDay = (index) => {

			let result = rows.reduce((sum, current)=>{
				/*-----------------------------------------*/
				//let propName = Object.keys(current.planning_hours[index]).pop();
				let hours = current.planning_hours[index].hours;
				/*-----------------------------------------*/
				return sum + hours}, 0);

			return (Math.round(result * 100) / 100 );
		}

		const getColumnColor = (sumByDay, item) => {
			let dayOfWeek = new Date(item.date * 1000).getDay();
				switch (dayOfWeek) {
  					case 0:
	  					dayOfWeek = 'sun';
	  					break;
				  	case 6:
				  		dayOfWeek = 'sat';
				    	break;
			  		default:
			    		dayOfWeek = 'work';
			    		break;
			}



			let resultCap = capacity.find((cap)=>{
				return (cap.days === dayOfWeek 
					&& sumByDay >= cap.hours_start 
					&& sumByDay <= cap.hours_end && cap.hours_end !== 0);
			});

			return resultCap ? resultCap.color_code : null;
		}

		return(
			<tr className="table-head">
				<TableHeadCell 
					title="Cost Center" 
					fieldName="cost_center_label"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					 />
				<TableHeadCell 
					title="Job #" 
					fieldName="jobno"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					/>
				<TableHeadCell 
					title="Customer" 
					fieldName="customer"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending} 
					/>
				<TableHeadCell 
					title="Description" 
					fieldName="description"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					/>
				<TableHeadCell 
					title="Date In" 
					fieldName="Date_In"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					 />
				<TableHeadCell 
					title="Date_Due" 
					fieldName="Date_Due"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					 />
				<TableHeadCell 
					title="Partial Due" 
					fieldName="Partial_Due"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					/>

				<TableHeadCell 
					title="Days Available" 
					fieldName="Days_Available"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					/>

				<TableHeadCell 
					title="Hrs. Planed" 
					fieldName="Hrs_planned"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					/>
				<TableHeadCell 
					title="Required Days" 
					fieldName="Required_Days"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending}
					/>
				<TableHeadCell 
					title="Allocated Hours" 
					fieldName="Allocated_Hours"
					hiddenCols={hiddenCols}
					sortedByField={sortedByField}
					sortedByFieldAction={sortedByFieldAction}
					sortAscending={sortAscending} 
					/>
					{ 
						planning_hours.map((item, index)=>{

							//console.log('item_is_an: ', typeof item );
							/*-----------------------------------------*/
							/*let propName = Object.keys(item).pop();
							item = item[propName];*/
							/*-----------------------------------------*/
							const sumByDay = getSumByDay(index);
							const color = getColumnColor(sumByDay, item);
							return (item.is_weekly ?
								<th key={index} className="day" >
									<div>
										<div>W/E</div>
										<div>{getDate(item.date)} {getMonth(item.date)}</div>
										<div>{sumByDay.toFixed(2)}</div>
										<ButtonBase 
											onClick={this.sortHandler.bind(this,'planning_hours', index)}
											className="sort-btn">
											{ sortedByIndex === index && sortAscending === true ?
													<i className="fa fa-angle-up" aria-hidden="true"></i>
												: 
													<i className="fa fa-angle-down" aria-hidden="true"></i>
											}
										</ButtonBase>
									</div>
								</th>
								 : 
								<th 
									key={index} 
									className="day"
									bgcolor={color !== '-' ? color : '#FFFFFF'}
									style={{'backgroundColor': color, borderLeft: index === 0 ? '3px solid rgb(208, 208, 208)' : null}}
									>
									<div>
										<div>{getWeekDay(item.date)}</div>
										<div>{getDate(item.date)} {getMonth(item.date)}</div>
										<div>{sumByDay.toFixed(2)}</div>
										<ButtonBase 
											onClick={this.sortHandler.bind(this,'planning_hours', index)}
											className="sort-btn">
											{ sortedByIndex === index && sortAscending === true ?
												<i className="fa fa-angle-up" aria-hidden="true"></i>
											: 
												<i className="fa fa-angle-down" aria-hidden="true"></i>
											}
										</ButtonBase>
									</div>
								</th>
							)
					}) }
				</tr>
		)
	}

}



export default TableHead