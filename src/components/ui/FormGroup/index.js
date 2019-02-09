import React from 'react';
import './styles.scss';

export const FormGroup = (props) => {
	const type = props.type || '';
	const name = props.name || '';
	const label = props.label || '';
	const defaultValue = props.defaultValue || '';

	return (
		<div className="form-group">
			<label>{label}</label>
			<input 
				type={type}
				name={name}
				defaultValue={defaultValue} 
				placeholder={label}/>
			<div className=""></div>
		</div>
	)
}
