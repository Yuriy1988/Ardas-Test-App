import React from 'react';
// import { connect } from 'react-redux';

import Header from '../Header';
import Table from '../Table';
import Pagination from '../Pagination';

// import { splitTasks } from '../../actions';

import './app.less';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: props.data,
            currentPage: 1,
            tasksPerPage: 13
        };
    }

    render () {
        return (
            <div className="app-container">
                <Header />
                <div className="content-wrapper">
                    <div className="table-wrapper">
                        <Table data={this.state}/>
                        <Pagination data={this.state} onClick={this.changePage.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }

    changePage (page) {
        this.setState({
            currentPage: page
        });
    }
}

// export default connect(state => ({
//     tasks: state.tasks
// }))(App);