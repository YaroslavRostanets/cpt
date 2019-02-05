import React from 'react';
import './styles.scss';

export const FormGroup = (props) => {
	const label = props.label || '';
	const type = props.type || '';
	const defaultValue = props.defaultValue || '';

	return (
		<div className="form-group">
			<label>{props.label}</label>
			<input type={props.type} defaultValue={defaultValue}/>
			<div className=""></div>
		</div>
	)
}
