import React from 'react';
import moment from 'moment';
// import InlineEdit from 'react-edit-inline';

import Editing from './Editing.jsx';
import '../../styles/font-awesome/font-awesome.less';
import './task.less';

class Task extends React.Component {
    render () {
        let id = this.props.data.selectedTask,
            task = this.props.data.tasks.find(function (task) { 
                return task.id === id; 
            });

        return (
            <div className="task-info">
                <table className="task-table">
                    <thead>
                        <tr className="table_row table_row-head">
                            <Editing task={task} />
                        </tr>
                    </thead>
                    <tbody>
                        { this.generateRows(task) }
                    </tbody>
                </table>
                <div className="info-back">
                    <i className="fa fa-arrow-left" onClick={this.props.onClick} aria-hidden="true">
                        <span className="back">Back</span>
                    </i>
                </div>
            </div>
        );
    }

    generateRows (task) {
        let rows = [],
            count = 0;

        for (let key in task) {
            let generateDate = (date) => {
                let dateFormat = 'MM/DD/YYYY (hh:mm a)';

                return moment(date).format(dateFormat);
            };

            if (key === 'creation_date' ||
                key === 'due_date' ||
                key === 'start_date') {
                    task[key] = generateDate(task[key]);
                }

            let tpl = <tr className="table_row" key={count}>
                <td className="table_cell">{key}</td>
                <td className="table_cell">{String(task[key])}</td>
            </tr>;

            ++count;

            rows.push(tpl);
        }

        return rows;
    }
}

export default Task;