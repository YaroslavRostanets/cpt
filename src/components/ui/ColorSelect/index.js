import React, { Component } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import './styles.scss';

class ColorSelect extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.handlerColorChange(e.target.value);
	}

	render () {
		const { selectedColor } = this.props;
		const { availableColors } = this.props;
		const { handlerColorChange } = this.props;

		return (
			<div style={{backgroundColor: selectedColor}} 
				className="color-selected">
				<Select
					value={selectedColor}
					className="color-selected-in"
					onChange={this.handleChange.bind(this)}
					>
					{ availableColors.map((color)=>{
					    return color === '-' ? 
					    	<MenuItem key={color} value={'-'} className="color-item">
								<div className="color"
										style={{backgroundColor: '#FFFFFF'}}>
										N/A
								</div>
							</MenuItem>
					     :
					     	<MenuItem key={color} value={color} className="color-item">
								<div className="color" 
									style={{backgroundColor: color}}></div>
							</MenuItem>
					

					})}
					
				</Select>
			</div>
		)
	}
}

export default ColorSelect