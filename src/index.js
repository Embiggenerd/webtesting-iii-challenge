import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';

import { store } from './redux/store'
import Dashboard from './dashboard/Dashboard';

ReactDOM.render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));
