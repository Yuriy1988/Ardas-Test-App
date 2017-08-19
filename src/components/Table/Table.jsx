import React from 'react';
import moment from 'moment';

import './table.less';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          tasks: props.data,
          currentPage: 1,
          rowsPerPage: 13
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return (
            <table className="data-table">
                <thead>
                    <tr className="table_row table_row-head">
                        <th className="table_cell-head">Task Name</th>
                        <th className="table_cell-head">Tags</th>
                        <th className="table_cell-head">Actual Efforts</th>
                        <th className="table_cell-head">Estimated Effort</th>
                        <th className="table_cell-head">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    { this.generateRows() }
                </tbody>
            </table>
        );
    }

    generateRows () {
        const { tasks, currentPage, rowsPerPage } = this.state;

        const lastRowIndex = currentPage * rowsPerPage;
        const firstRowIndex = lastRowIndex - rowsPerPage;
        const currentTasks = tasks.slice(firstRowIndex, lastRowIndex);

        console.log('lastRowIndex', lastRowIndex, 'firstRowIndex', firstRowIndex, 'currentTasks', currentTasks);
        console.log(currentPage, rowsPerPage);

        const rows = currentTasks.map((task) => {
            let isActive = task.obj_status === 'active',
                isHighPriority = task.is_high_priority,
                generateClassName = () => {
                    return isHighPriority ? 'table_row high_priority' : 'table_row';
                },
                generateDate = () => {
                    let date = task.due_date,
                        dateFormat = 'MM/DD/YYYY (hh:mm a)';

                    return date ? moment(date).format(dateFormat) : '-';
                },
                row;

            if (isActive) row = (
                <tr className={ generateClassName() } key={task.id} onClick={() => this.handleClick(task.id)}>
                    <td className="table_cell">{task.name || '-'}</td>
                    <td className="table_cell">{task.tags || '-'}</td>
                    <td className="table_cell">{task.actual_effort || '-'}</td>
                    <td className="table_cell">{task.estimated_effort || '-'}</td>
                    <td className="table_cell">{ generateDate() }</td>
                </tr>
            );

            return row;
        });

        return rows;
    }

    handleClick (id) {
        console.log(id);
    }
}

export default Table;