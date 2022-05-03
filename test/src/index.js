import React from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleReactForm from '../../src/index.js';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(<SimpleReactForm />);
