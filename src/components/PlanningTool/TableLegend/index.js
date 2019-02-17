import React from 'react';
import ColorsTable from './ColorsTable';

export const TableLegend = (props) => {

	const {timeline} = props;
	const working = [];
	const overTime = [];
	const overCapacity = [];

	props.capacity.forEach((item)=>{
		switch(item.working_type) {
  			case 'working':
  				working.push(item);
  				break;
  			case 'over time':
  				overTime.push(item);
  				break;
  			case 'over capacity':
  				overCapacity.push(item);
  				break;
			}
		});

	return (
		<div className="js-table-legend">
			<div className="required-days std-block">
				<div className="title">Required  Days</div>
					<table>
						<tbody>
							<tr>
								<th>Hrs.</th>
								<th></th>
								<th>Days</th>
							</tr>
							{ timeline.map((item, index) => {
								return (
								<tr key={index}>
									<td>
										{item.hours_start}
									</td>
									<td>
										{item.hours_end}
									</td>
									<td>
										{item.days_value}
									</td>
								</tr>
								)
							})}
							<tr>
								<td>
									51
								</td>
								<td>
									200
								</td>
								<td>
									3
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<ColorsTable capacity={working} />
				<ColorsTable capacity={overTime} />
				<ColorsTable capacity={overCapacity} />
		</div>
	)
}