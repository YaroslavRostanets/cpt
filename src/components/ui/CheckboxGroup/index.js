import React, { Component } from 'react';

import Checkbox from '@material/react-checkbox';
import "@material/react-checkbox/dist/checkbox.css";
import './styles.scss';

class CheckboxGroup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked || false, 
      		indeterminate: false
		}
	}

	handleChange() {

	}

	render() {
		const label = this.props.label || "";
		const { checked, prop } = this.props; 
		const { colDisplayChange } = this.props;
		
		return(
			<label className="checkbox-group">
				<Checkbox
	          		nativeControlId='my-checkbox'
	          		checked={checked}
	   
	          		onChange={(e) => this.setState({
			            checked: e.target.checked,
			            indeterminate: e.target.indeterminate},
			            	()=>{
			            	colDisplayChange({
			            		[prop]: this.state.checked
			            	})}
			            )
	          		}
	        	/>
	        	<div className="label-text">
	        		{label}
	        	</div>
			</label>
			
		)
	}
}

export default CheckboxGroup

