import React from 'react';

import './header.less';

class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <img src={require('../../images/logo.png')}/>
            </header>
        );
    }
}

export default Header;