import React, { Component } from 'react';
import { ButtonBase, IconButton, Button, Input, MenuItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Header from '../Header';
import ColorsTable from './ColorsTable';
import './styles.scss';
import Select from '@material-ui/core/Select';

class Settings extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {

		return (
			<div id="global-settings">
				<Header />
				<div className="content">
					<div id="settings-ctrl">
						<div className="flex">

							<div className="required-days std-block">
								<div className="title">
									Required  Days
								</div>
								<table>
									<tbody>
										<tr>
											<th>Hrs.</th>
											<th></th>
											<th>Days</th>
											<th></th>
										</tr>
										<tr>
											<td>
												<input type="text" 
													defaultValue="1"
													disabled />
											</td>
											<td>
												<input type="text" 
													defaultValue="20" />
											</td>
											<td>
												<input type="text" 
													defaultValue="1" />
											</td>
											<td>
												<IconButton className="remove">
													<CloseIcon />
												</IconButton>
											</td>
										</tr>
										<tr>
											<td>
												<input type="text" 
													defaultValue="21"
													disabled />
											</td>
											<td>
												<input type="text" 
													defaultValue="50" />
											</td>
											<td>
												<input type="text" 
													defaultValue="2" />
											</td>
											<td>
												<IconButton className="remove">
													<CloseIcon />
												</IconButton>
											</td>
										</tr>
										<tr>
											<td>
												<input type="text" 
													defaultValue="51"
													disabled />
											</td>
											<td>
												<input type="text" 
													defaultValue="200" />
											</td>
											<td>
												<input type="text" 
													defaultValue="3" />
											</td>
											<td>
												<IconButton className="remove">
													<CloseIcon />
												</IconButton>
											</td>
										</tr>
										<tr>
											<td>
												<input type="text" 
													defaultValue="201"
													disabled />
											</td>
											<td>
												<input type="text" 
													defaultValue="300" />
											</td>
											<td>
												<input type="text" 
													defaultValue="4" />
											</td>
											<td>
												<IconButton className="remove">
													<CloseIcon />
												</IconButton>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="btns-wrap">
									<ButtonBase className="btn primary-btn">
										Save
									</ButtonBase>
									<ButtonBase className="btn outlined-primary-btn">
        								Add fields
      								</ButtonBase>
								</div>
							</div>

							<div className="standarts-colors std-block">
								<div className="title">
									Colors for standarts
								</div>
								<div className="tables">
									<ColorsTable title="Standard" />
									<ColorsTable title="Over Time" />
									<ColorsTable title="Over Capacity" />
								</div>
								<ButtonBase className="btn primary-btn">
									Save
								</ButtonBase>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Settings