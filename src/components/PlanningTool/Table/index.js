import React, { Component } from 'react';
import './styles.scss';

class Table extends Component {

	render() {
		const temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

		return(
			<div id="planning-table">
				<table>
				<tbody>
				<tr>
					<th>
						<div className="head">
							Cost Center
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Job #
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Customer
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Description
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Date In
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Date Due
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Partial Due
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Days Available
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Hrs. Planed
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Required Days
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							Allocated Hours
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#FCC99A'}}>
						<div className="head">
							<div>Mon</div>
						    <div>09 Oct</div>
							<div>255,21</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Tues</div>
						    <div>10 Oct</div>
							<div>30,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Wed</div>
						    <div>11 Oct</div>
							<div>32,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Thu</div>
						    <div>12 Oct</div>
							<div>30,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#EB9DA6'}}>
						<div className="head">
							<div>Fri</div>
						    <div>13 Oct</div>
							<div>520,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							<div>Sun</div>
						    <div>14 Oct</div>
							<div></div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							<div>Sat</div>
						    <div>15 Oct</div>
							<div></div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Mon</div>
						    <div>16 Oct</div>
							<div>255,21</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Tues</div>
						    <div>17 Oct</div>
							<div>30,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Wed</div>
						    <div>18 Oct</div>
							<div>32,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Thu</div>
						    <div>19 Oct</div>
							<div>30,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th style={{background: '#A5DBA8'}}>
						<div className="head">
							<div>Fri</div>
						    <div>20 Oct</div>
							<div>520,00</div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							<div>Sun</div>
						    <div>21 Oct</div>
							<div></div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							<div>Sat</div>
						    <div>22 Oct</div>
							<div></div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							<div>W/E</div>
						    <div>23 Oct</div>
							<div></div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
					<th>
						<div className="head">
							<div>W/E</div>
						    <div>24 Oct</div>
							<div></div>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</div>
					</th>
				</tr>
				{ temp.map(function(item, index){
					return(
				<tr key={index}>
					<td>
						ABC123
					</td>
					<td>
						108003
					</td>
					<td>
						MCHG LLC 
						DBA 
						CHANTAL 
						GUILLON
					</td>
					<td>
						BOX  1C + DH STAQ/0
					</td>
					<td>
						10.08.18
					</td>
					<td>
						10.08.18
					</td>
					<td>
						10.08.18
					</td>
					<td>
						1.0
					</td>
					<td>
						17.02
					</td>
					<td>
						1.0
					</td>
					<td style={{borderRight: '3px solid #D0D0D0'}}>
						17.02
					</td>
					<td style={{borderLeft: '3px solid #D0D0D0'}}>
						<input type="text" defaultValue="17.2"/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
					<td>
						<input type="text" defaultValue=""/>
					</td>
				</tr>
					)
				}) }
				</tbody>
			</table>
			</div>
			
		)
	}
}

export default Table