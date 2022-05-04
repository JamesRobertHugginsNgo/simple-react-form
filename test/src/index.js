import React, { useState } from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleReactForm from '../../src/index.js';

function App() {
	const [data, setData] = useState({
		'test-1': 'THIS IS A TEST',
		'test-2': 'THIS IS A TEST'
	});

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
								bindTo: 'first-name'
							},
							{
								type: 'text',
								title: 'Last Name',
								bindTo: 'last-name'
							}
						]
					},
					{
						fields: [
							{
								type: 'dropdown',
								title: 'Birth Month',
								choices: [
									{ text: '- Select - ', value: '' },
									{ text: 'January' },
									{ text: 'February' },
									{ text: 'March' },
									{ text: 'April' },
									{ text: 'May' },
									{ text: 'June' },
									{ text: 'July' },
									{ text: 'August' },
									{ text: 'September' },
									{ text: 'October' },
									{ text: 'November' },
									{ text: 'December' }
								],
								bindTo: 'birth-month'
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
								title: 'TEXT FIELD',
								bindTo: 'testfield'
							},
							{
								type: 'textarea',
								title: 'TEXTAREA FIELD',
								helpText: 'TEXTAREA HELP TEXT',
								bindTo: 'testareafield'
							}
						]
					}
				]
			}
		],
		data,
		updateData: (bindTo, value) => void setData({ ...data, [bindTo]: value })
	};

	return (
		<div className='container pt-3'>
			<SimpleReactForm {...formDefinition} />
			{JSON.stringify(data, null, 2)}
		</div>
	);
}

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(<App />);
