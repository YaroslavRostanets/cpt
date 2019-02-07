import React, { Component } from 'react';
import { ButtonBase, IconButton, Button, Input, MenuItem, Select } from '@material-ui/core';
import ColorSelect from '../ui/ColorSelect';

class ColorsTable extends Component {

	constructor(props) {
		super(props);
		//this.state
	}

	render() {
		const { title } = this.props;

		return(
			<table className="colors-table">
				<tbody>
					<tr>
						<th></th>
						<th colSpan="3">
							{title}
						</th>
					</tr>
					<tr>
						<td>M-F</td>
						<td>
							<input type="text" defaultValue="1" />
						</td>
						<td>
							<input type="text" defaultValue="200" />
						</td>
						<td>
							<ColorSelect />
						</td>
					</tr>
					<tr>
						<td>Sat</td>
						<td>
							<input type="text" defaultValue="0" />
						</td>
						<td>
							<input type="text" defaultValue="0" />
						</td>
						<td>
							<ColorSelect />
						</td>
					</tr>
					<tr>
						<td>Sun</td>
						<td>
							<input type="text" defaultValue="0" />
						</td>
						<td>
							<input type="text" defaultValue="0" />
						</td>
						<td>
							<ColorSelect />
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default ColorsTable