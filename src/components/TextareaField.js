/* global jsonLogic */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

let idCounter = 0;

function TextareaField({
	id = `textarea-field-${idCounter++}`,
	className,
	title,
	required = false,
	helpText,
	rows,
	visible = true,
	readOnly = false,
	bindTo,
	data,
	updateData
}) {
	const refs = React.createRef();

	useEffect(() => {
		const element = refs.current;
		element.value = (data && bindTo && data[bindTo]) || '';
		if (updateData) {
			const inputHandler = () => void updateData(bindTo, element.value);
			element.addEventListener('input', inputHandler);
			return () => void element.removeEventListener('input', inputHandler);
		}
	});

	let visibleValue = jsonLogic && visible && typeof visible === 'object'
		? jsonLogic.apply(visible, data || {})
		: typeof visible === 'function' ? visible(data, bindTo) : visible;

	let readOnlyValue = jsonLogic && readOnly && typeof readOnly === 'object'
		? jsonLogic.apply(readOnly, data || {})
		: typeof visible === 'function' ? visible(data, bindTo) : readOnly;

	return (
		<Field
			className={[className || 'col', !visibleValue && 'd-none'].filter(Boolean).join(' ')}
			id={id}
			title={title}
			required={required}
			helpText={helpText}
		>
			<textarea
				name={id}
				type="text"
				required={required}
				rows={rows}
				readOnly={readOnlyValue}
				className="form-control"
				id={id}
				aria-describedby={helpText && `${id}-help`}
				ref={refs}
			/>
		</Field>
	);
}

TextareaField.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	required: PropTypes.bool,
	helpText: PropTypes.string,
	rows: PropTypes.number,
	visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object]),
	readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object]),
	bindTo: PropTypes.string,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default TextareaField;
