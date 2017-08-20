import React from 'react';

import Header from '../Header';
import Table from '../Table';
import Pagination from '../Pagination';
import Task from '../Task';

import './app.less';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: props.data,
            currentPage: 1,
            tasksPerPage: 10,
            isTaskSelected: false,
            selectedTask: null
        };
    }

    render () {
        return (
            <div className="app-container">
                <Header />
                <div className="content-wrapper">
                    {!this.state.isTaskSelected ?
                        <div className="table-wrapper">
                            <Table data={this.state} onClick={this.showTask.bind(this)}/>
                            <Pagination data={this.state} onClick={this.changePage.bind(this)}/>
                        </div> :
                        <div className="task-wrapper">
                            <Task data={this.state} onClick={this.previousPage.bind(this)}/>
                        </div>
                    }
                </div>
            </div>
        );
    }

    changePage (page) {
        this.setState({
            currentPage: page
        });
    }

    showTask (id) {
        this.setState({
            isTaskSelected: true,
            selectedTask: id
        });
    }

    previousPage () {
        this.setState({
            isTaskSelected: false,
            selectedTask: null
        });
    }
}