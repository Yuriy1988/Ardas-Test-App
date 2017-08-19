import React from 'react';

import Header from '../Header';
import Table from '../Table';
import Pagination from '../Pagination';

import tasks from '../../data/tasks.json';

import './app.less';

class App extends React.Component {
    render () {
        return (
            <div className="app-container">
                <Header />
                <div className="content-wrapper">
                    <div className="table-wrapper">
                        <Table data={tasks}/>
                        <Pagination data={tasks}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;