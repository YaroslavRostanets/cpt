import React from 'react';

export const Empty = (props) => {
	const text = props.text || '';

	return (
		<div className="empty">
			{ text }
		</div>
	)
}