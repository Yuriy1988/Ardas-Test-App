import React from 'react';
import ReactDOM from 'react-dom';

import tasks from './data/tasks.json';
import App from './components/App';

import './styles/common.less';

require('./images/favicon.ico');

ReactDOM.render(
    <App data={tasks}/>,
    document.getElementById('app')
);