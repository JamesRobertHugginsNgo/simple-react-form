import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

function Section({ id, title, rows = [], types, data, updateData }) {
	return (
		<div className="card mb-3" id={id}>
			<div className="card-header">
				{title}
			</div>

			<div className="card-body">
				{rows.map((row) => (
					<Row
						types={types}
						data={data}
						updateData={updateData}
						key={JSON.stringify(row)}
						{...row}
					/>
				))}
			</div>
		</div>
	);
}

Section.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	rows: PropTypes.array,
	types: PropTypes.object,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default Section;
