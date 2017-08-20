import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import createStore from './store';
// import { setTasks } from './actions';

import tasks from './data/tasks.json';
import App from './components/App';

import './styles/common.less';

require('./images/favicon.ico');

// const store = createStore();

// store.dispatch(setTasks(require('./data/tasks.json')), 13);

ReactDOM.render(
    // <Provider store={store}>
        <App data={tasks}/>,
    // </Provider>,
    document.getElementById('app')
);

// ToDo
// 2. Assets folder

// https://github.com/IAmStrong/Voting-App/blob/master/server/src/reducer.js
// http://jsfiddle.net/8aba3sp6/2/embedded/js,resources,html,css,result/light/
// https://spapas.github.io/2016/03/02/react-redux-tutorial/#a-simple-example
// https://blog.madewithlove.be/post/redux/
// https://www.npmjs.com/package/redux-thunk
// http://redux.js.org/
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store
// https://github.com/reactjs/redux/issues/1719
// https://codepen.io/PiotrBerebecki/pen/pEYPbY
// https://github.com/AdeleD/react-paginate