import React from 'react';

export const TableLegend = (props) => {

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
							<tr>
								<td>
									1
								</td>
								<td>
									20
								</td>
								<td>
									1
								</td>
							</tr>
							<tr>
								<td>
									21
								</td>
								<td>
									50
								</td>
								<td>
									2
								</td>
							</tr>
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
				<div className="standarts-colors std-block">
					<div className="title">Colors for standarts</div>
					<div className="tables">
						<table className="colors-table">
							<tbody>
								<tr>
									<th></th>
									<th colSpan="3">Standard</th>
								</tr>
								<tr>
									<td>M-F</td>
									<td>1</td>
									<td>200</td>
									<td style={{backgroundColor: '#A3DAA9 !important'}}></td>
								</tr>
								<tr>
									<td>Sat</td>
									<td>0</td>
									<td>0</td>
									<td style={{backgroundColor: '#FBC79C'}}></td>
								</tr>
								<tr>
									<td>Sun</td>
									<td>0</td>
									<td>0</td>
									<td style={{backgroundColor: '#EA9BA5'}}></td>
								</tr>
							</tbody>
						</table>
						<table className="colors-table">
							<tbody>
								<tr>
									<th></th>
									<th colSpan="3">Over Time</th>
								</tr>
								<tr>
									<td>M-F</td>
									<td>1</td>
									<td>200</td>
									<td style={{backgroundColor: '#A3DAA9'}}></td>
								</tr>
								<tr>
									<td>Sat</td>
									<td>0</td>
									<td>0</td>
									<td style={{backgroundColor: '#FBC79C'}}></td>
								</tr>
								<tr>
									<td>Sun</td>
									<td>0</td>
									<td>0</td>
									<td style={{backgroundColor: '#EA9BA5'}}></td>
								</tr>
							</tbody>
						</table>
						<table className="colors-table">
							<tbody>
								<tr>
									<th></th>
									<th colSpan="3">Over Capacity</th>
								</tr>
								<tr>
									<td>M-F</td>
									<td>1</td>
									<td>200</td>
									<td style={{backgroundColor: '#A3DAA9'}}></td>
								</tr>
								<tr>
									<td>Sat</td>
									<td>0</td>
									<td>0</td>
									<td style={{backgroundColor: '#FBC79C'}}></td>
								</tr>
								<tr>
									<td>Sun</td>
									<td>0</td>
									<td>0</td>
									<td style={{backgroundColor: '#EA9BA5'}}></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
					
		</div>
	)
}