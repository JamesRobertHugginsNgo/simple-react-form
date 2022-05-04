import React from 'react';
import PropTypes from 'prop-types';

import Section from './components/Section';

function SimpleReactForm({ id, sections = [], data, updateData }) {
	return (
		<form id={id}>
			{sections.map((section) => (<Section data={data} updateData={updateData} key={JSON.stringify(section)} {...section} />))}
		</form>
	);
}

SimpleReactForm.propTypes = {
	id: PropTypes.string,
	sections: PropTypes.array,
	data: PropTypes.object,
	updateData: PropTypes.func
};

export default SimpleReactForm;
