import React from 'react';

import './app.less';

class App extends React.Component {
    render () {
        return (
            <div className="app-container">
                <header className="header">
                    <img src={require('../../images/logo.png')}/>
                </header>
            </div>
        );
    }
}

export default App;