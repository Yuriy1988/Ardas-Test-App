import React from 'react';

import '../../styles/font-awesome/font-awesome.less';
import './pagination.less';

class Pagination extends React.Component {
    render () {
        return (
            <div className="pagination">
                <span className="pages"> { this.countPages() } </span>
                <div className="arrows">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
            </div>
        );
    }

    countPages () {
        const tasks = this.props.data;

        return 'pages 1 of 5';
    }
}

export default Pagination;