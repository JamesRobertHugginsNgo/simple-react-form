import React from 'react';
import PropTypes from 'prop-types';

import TextField from './TextField';
import TextareaField from './TextareaField';

function Row({
	id,
	fields = [],
	data,
	updateData,
	types
}) {
	const componentTypes = Object.assign({
		'text': TextField,
		'number': TextField,
		'email': TextField,
		'textarea': TextareaField
	}, types);

	return (
		<div className='row' id={id}>
			{fields.map(({ type = 'text', ...field }, key) => React.createElement(
					componentTypes[type] || componentTypes['text'],
					{
						type,
						data,
						updateData,
						types,
						key,
						...field
					}
				))}
		</div>
	);
}

Row.propTypes = {
	id: PropTypes.string,
	fields: PropTypes.array,
	data: PropTypes.object,
	updateData: PropTypes.func,
	types: PropTypes.object
};

export default Row;
