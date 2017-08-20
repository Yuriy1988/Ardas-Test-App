import React from 'react';

import '../../styles/font-awesome/font-awesome.less';
import './pagination.less';

class Pagination extends React.Component {
    render () {
        return (
            <div className="pagination">
                <span className="pages"> { this.getPageStatus() } </span>
                <div className="arrows">
                    {this.props.data.currentPage === 1 ?
                        <i className="fa fa-chevron-left disabled" aria-hidden="true"></i> :
                        <i className="fa fa-chevron-left" onClick={ () => { this.handleClick('left') }} aria-hidden="true"></i>
                    }
                    
                    <i className="fa fa-chevron-right" onClick={ () => { this.handleClick('right') }} aria-hidden="true"></i>
                </div>
            </div>
        );
    }

    handleClick (direction) {
        let props = this.props.data,
            page = props.currentPage,
            pages = Math.ceil(props.tasks.length / props.tasksPerPage),
            directions = {
                'left': function () {
                    page === 1 ? page : page--;
                },
                'right': function () {
                    page === pages ? page : page++;
                },
            };

        directions[direction]();

        this.props.onClick(page);
    }

    getPageStatus () {
        const data = this.props.data;
        const taskCount = data.tasks.length;
        const { currentPage, tasksPerPage } = data;

        const pegeCount = Math.ceil(taskCount / tasksPerPage);

        return `page ${currentPage} of ${pegeCount}`;
    }
}

export default Pagination;