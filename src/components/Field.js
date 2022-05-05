import React from 'react';
import PropTypes from 'prop-types';


import DropdownField from './DropdownField';
import TextareaField from './TextareaField';
import TextField from './TextField';

function Field({ type = 'text',  className = 'col', types = {}, ...props }) {
	const allTypes = {
		dropdown: DropdownField,
		text: TextField,
		textarea: TextareaField,
		...types
	};

	const component = allTypes[type] || allTypes['text'];

	return (
		<div className={['mb-3', className].join(' ')}>
			{React.createElement(component, { ...props })}
		</div>
	);
}

Field.propTypes = {
	type: PropTypes.string,
	types: PropTypes.object,
	className: PropTypes.string
};

export default Field;
