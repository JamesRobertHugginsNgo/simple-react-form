/* global jsonLogic */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

let idCounter = 0;

function TextField({
	type = 'text',
	id = `text-field-${idCounter++}`,
	className,
	title,
	required = false,
	helpText,
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
			<input
				name={id}
				type={type}
				required={required}
				readOnly={readOnlyValue}
				className="form-control"
				id={id}
				aria-describedby={helpText && `${id}-help`}
				ref={refs}
			/>
		</Field>
	);
}

TextField.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	required: PropTypes.bool,
	helpText: PropTypes.string,
	visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object]),
	readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object]),
	bindTo: PropTypes.string,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default TextField;
