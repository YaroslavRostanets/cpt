import React, { Component } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import './styles.scss';

class ColorSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedColor: '#B34EE9'
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState({
			selectedColor: e.target.value
		});
	}

	render () {
		const { selectedColor } = this.state;

		return (
			<div style={{backgroundColor: selectedColor}} 
				className="color-selected">
				<Select
					value="#FFFFFF"
					className="color-selected-in"
					onChange={this.handleChange}
					>
					<MenuItem value="#4BA0D5" className="color-item">
						<div className="color" 
								style={{backgroundColor: '#4BA0D5'}}></div>
					</MenuItem>
					<MenuItem value="#FF00AE" className="color-item">
						<div className="color" 
								style={{backgroundColor: '#FF00AE'}}></div>
					</MenuItem>
					<MenuItem value="#D0FF00" className="color-item">
						<div className="color"
								style={{backgroundColor: '#D0FF00'}}
						></div>
					</MenuItem>
				</Select>
			</div>
		)
	}
}

export default ColorSelect