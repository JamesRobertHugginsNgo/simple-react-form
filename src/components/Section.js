/* eslint-disable react/jsx-key */

import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

function Section({ id, title, rows = [], data, updateData }) {
	return (
		<div className="card mb-3" id={id}>
			<div className="card-header">
				{title}
			</div>

			<div className="card-body">
				{rows.map((row) => (<Row data={data} updateData={updateData} {...row} />))}
			</div>
		</div>
	);
}

Section.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	rows: PropTypes.array,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default Section;
