import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

function Row({ id, fields = [], data, updateData }) {
	return (
		<div className='row' id={id}>
			{fields.map((field) => (<Field data={data} updateData={updateData} key={JSON.stringify(field)} {...field} />))}
		</div>
	);
}

Row.propTypes = {
	id: PropTypes.string,
	fields: PropTypes.array,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default Row;
