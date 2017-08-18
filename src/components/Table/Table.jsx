import React from 'react';

import './table.less';

class Table extends React.Component {
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
        const data = this.props.data;
        const rows = data.map((task) => {
            let isActive = task.obj_status === 'active',
                row;

            if (isActive) row = (
                <tr className="table_row" key={task.id}>
                    <td className="table_cell">{task.name}</td>
                    <td className="table_cell">{task.tags}</td>
                    <td className="table_cell">{task.actual_effort}</td>
                    <td className="table_cell">{task.estimated_effort}</td>
                    <td className="table_cell">{task.due_date}</td>
                </tr>
            );

            return row;
        });

        return rows;
    }
}

export default Table;