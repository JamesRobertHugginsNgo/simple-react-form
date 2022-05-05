/* eslint-disable react/jsx-key */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

let idCounter = 0;

function DropdownField({ id = `dropdown-field-${idCounter++}`, title, choices = [], required = false, helpText, bindTo, data, updateData }) {
	const refs = React.createRef();
	useEffect(() => {
		if (bindTo && data) {
			const element = refs.current;

			const value = data[bindTo] || '';
			if (element.value !== value) {
				console.log('DROPDOWN FIELD / SET VALUE');
				element.value = value;
			}

			if (updateData) {
				console.log('DROPDOWN FIELD / ADD INPUT EVENT LISTENER');
				const inputHandler = () => void updateData(bindTo, element.value);
				element.addEventListener('input', inputHandler);

				return () => {
					console.log('DROPDOWN FIELD / REMOVE INPUT EVENT LISTENER');
					element.removeEventListener('input', inputHandler);
				};
			}
		}
	});

	const helpTextId = helpText && `${id}-help`;
	return (
		<>
			<label htmlFor={id} className='form-label'>
				{title} {required ? '' : (<span className='form-text'>Optional</span>)}
			</label>
			<select
				name={id}
				required={required}
				className="form-select"
				id={id}
				aria-describedby={helpTextId}
				ref={refs}
			>
				{choices.map((choice) => {
					if (typeof choice === 'string') {
						return (<option value={choice}>{choice}</option>);
					}

					const { text, value = text } = choice;
					return (<option value={value}>{text}</option>);
				})}
			</select>
			{helpTextId && (<div id={helpTextId} className="form-text">
				{helpText}
			</div>)}
		</>
	);
}

DropdownField.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	choices: PropTypes.array,
	required: PropTypes.bool,
	helpText: PropTypes.string,
	bindTo: PropTypes.string,
	data: PropTypes.object,
	updateData: PropTypes.func
};


export default DropdownField;
