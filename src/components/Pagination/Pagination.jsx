import React from 'react';

import '../../styles/font-awesome/font-awesome.less';
import './pagination.less';

class Pagination extends React.Component {
    render () {
        let data = this.getData();

        return (
            <div className="pagination">
                <span className="pages"> { this.getPageStatus() } </span>
                <div className="arrows">
                    {data.isFirstPage ?
                        <i className="fa fa-chevron-left disabled" aria-hidden="true"></i> :
                        <i className="fa fa-chevron-left" onClick={ () => { this.handleClick('left') }} aria-hidden="true"></i>
                    }
                    {data.isLastPage ?
                        <i className="fa fa-chevron-right disabled" aria-hidden="true"></i> :
                        <i className="fa fa-chevron-right" onClick={ () => { this.handleClick('right') }} aria-hidden="true"></i>
                    }
                </div>
            </div>
        );
    }

    getData () {
        let tasks = this.props.data.tasks,
            filtered = tasks.filter(task => task.obj_status === 'active'),
            length = filtered.length;

        let props = this.props.data,
            page = props.currentPage,
            pages = Math.ceil(length / props.tasksPerPage),
            isFirstPage = page === 1,
            isLastPage = page === pages;

        return {
            page: page,
            pages: pages,
            isFirstPage: isFirstPage,
            isLastPage: isLastPage
        };
    }

    handleClick (direction) {
        let data = this.getData(),
            page = data.page,
            directions = {
                'left': function () {
                    page === 1 ? page : page--;
                },
                'right': function () {
                    page === data.pages ? page : page++;
                },
            };

        directions[direction]();

        this.props.onClick(page);
    }

    getPageStatus () {
        let data = this.getData();

        return `page ${data.page} of ${data.pages}`;
    }
}

export default Pagination;