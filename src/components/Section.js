import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

function Section({
	id,
	title,
	rows = [],
	data,
	updateData,
	types
}) {
	const componentTypes = Object.assign({
		'row': Row
	}, types);

	return (
		<div className="card mb-3" id={id}>
			{title ? (
				<div className="card-header">
					{title}
				</div>
			) : null}

			<div className="card-body">
				{rows.map(({ type = 'row', ...row }, key) => React.createElement(
					componentTypes[type] || componentTypes['row'],
					{
						type,
						data,
						updateData,
						types,
						key,
						...row
					}
				))}
			</div>
		</div>
	);
}

Section.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	rows: PropTypes.array,
	data: PropTypes.object,
	updateData: PropTypes.func,
	types: PropTypes.object
};

export default Section;
