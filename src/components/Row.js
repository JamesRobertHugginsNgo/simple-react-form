import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

function Row({ id, fields = [], types, data, updateData }) {
	return (
		<div className='row' id={id}>
			{fields.map((field) => (<Field types={types} data={data} updateData={updateData} key={JSON.stringify(field)} {...field} />))}
		</div>
	);
}

Row.propTypes = {
	id: PropTypes.string,
	fields: PropTypes.array,
	types: PropTypes.object,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default Row;
