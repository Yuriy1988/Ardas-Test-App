import React from 'react';

import Header from '../Header';
import Table from '../Table';

import tasks from '../../data/tasks.json';

import './app.less';

class App extends React.Component {
    render () {
        return (
            <div className="app-container">
                <Header />
                <div className="content-wrapper">
                    <Table data={tasks}/>
                </div>
            </div>
        );
    }
}

export default App;