import React, { useState } from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleReactForm from '../../src/index.js';

function App() {
	const [data, setData] = useState({
		'first-name': 'First Name',
		'last-name': 'Last Name'
	});

	const calculateData = (data) => {
		data['full-name'] = `${data['first-name']} ${data['last-name']}`;
		delete data['result'];
		data['result'] = JSON.stringify(data, null, 2);
		return data;
	};

	calculateData(data);

	const updateData = (bindTo, value) => {
		setData(calculateData({ ...data, [bindTo]: value }));
	};

	const formDefinition = {
		sections: [
			{
				title: 'Personal Information',
				rows: [
					{
						fields: [
							{
								type: 'text',
								title: 'First Name',
								required: true,
								bindTo: 'first-name',
								helpText: 'Your first name'
							},
							{
								type: 'text',
								title: 'Last Name',
								bindTo: 'last-name',
								helpText: 'Your last name'
							}
						]
					},
					{
						fields: [
							{
								type: 'text',
								title: 'Full Name',
								helpText: 'Calculated field for your full name',
								visible: { "!==": [{ "var": "last-name" }, ""] },
								readOnly: true,
								bindTo: 'full-name'
							}
						]
					}
				]
			},
			{
				title: 'Text Field',
				rows: [
					{
						fields: [
							{
								type: 'text',
								title: 'Text Text Field',
								bindTo: 'text-text-field'
							}
						]
					},
					{
						fields: [
							{
								type: 'number',
								title: 'Number Text Field',
								bindTo: 'number-text-field'
							}
						]
					}
				]
			},
			{
				title: 'SECTION TITLE',
				rows: [
					{
						fields: [
							{
								type: 'text',
								title: 'Text Field',
								bindTo: 'testfield'
							}
						]
					},
					{
						fields: [
							{
								type: 'textarea',
								title: 'Textarea Field',
								helpText: 'TEXTAREA HELP TEXT',
								bindTo: 'testareafield'
							}
						]
					}
				]
			},
			{
				title: 'Result',
				rows: [
					{
						fields: [
							{
								type: 'textarea',
								title: 'Data',
								required: true,
								rows: 10,
								bindTo: 'result'
							}
						]
					}
				]
			}
		],
		data,
		updateData,
		types: {}
	};

	return (
		<div className='container pt-3'>
			<SimpleReactForm {...formDefinition} />
		</div>
	);
}

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(<App />);
