import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('./assets/images/favicon.ico');

// используй index только для того, что бы описать свое приложение: сюда обычно вставляют редаксовский провайдер, роутер итд... в следующем коммите увидишь
// стили тоже обычно импортят в app
// надо добавить eslint, без него никуда) - я добавил, но не все ему соответствует

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
