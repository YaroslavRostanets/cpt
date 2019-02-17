import React from 'react';
import './styles.scss';

export const FormGroup = (props) => {
	const type = props.type || '';
	const name = props.name || '';
	const label = props.label || '';
	const defaultValue = props.defaultValue || '';
	const error = props.error || '';

	return (
		<div className={props.hasError ? 'form-group has-error' : 'form-group'}>
			<label>{label}</label>
			<input 
				type={type}
				name={name}
				defaultValue={defaultValue} 
				placeholder={label}/>
			<div className="error-text">
				{error}
			</div>
		</div>
	)
}
