import React from 'react';
import PropTypes from 'prop-types';

function Field({
	className = 'col',
	id,
	title,
	required = false,
	helpText,
	children
}) {
	return (
		<div className={['mb-3', className].join(' ')} id={`${id}-element`}>
			<label htmlFor={id} className='form-label'>
				{title} {!required && (<span className='form-text'>(Optional)</span>)}
			</label>
			{children}
			{helpText && (
				<div id={`${id}-help`} className="form-text">
					{helpText}
				</div>
			)}
		</div>
	);
}

Field.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	required: PropTypes.bool,
	helpText: PropTypes.string,
	children: PropTypes.node
};

export default Field;
