import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

require('./images/favicon.ico');
require('./styles/common.less');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);