import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

let idCounter = 0;

function TextField({ id = `text-field-${idCounter++}`, title, required = false, helpText, bindTo, data, updateData }) {
	const refs = React.createRef();
	useEffect(() => {
		if (bindTo && data) {
			const element = refs.current;
			element.value = data[bindTo] || '';

			if (updateData) {
				const inputHandler = () => void updateData(bindTo, element.value);
				element.addEventListener('input', inputHandler);
				return () => void element.removeEventListener('input', inputHandler);
			}
		}
	});

	const helpTextId = helpText && `${id}-help`;
	return (
		<>
			<label htmlFor={id} className='form-label'>
				{title} {required ? '' : (<span className='form-text'>Optional</span>)}
			</label>
			<input
				name={id}
				type="text"
				required={required}
				className="form-control"
				id={id}
				aria-describedby={helpTextId}
				ref={refs}
			/>
			{helpTextId && (<div id={helpTextId} className="form-text">
				{helpText}
			</div>)}
		</>
	);
}

TextField.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	required: PropTypes.bool,
	helpText: PropTypes.string,
	bindTo: PropTypes.string,
	data: PropTypes.object,
	updateData: PropTypes.func
};


export default TextField;
