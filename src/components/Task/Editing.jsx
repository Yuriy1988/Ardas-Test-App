import React from 'react';

class Editing extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false,
            text: ''
        };

        this.handleClick.bind(this);
    }

    render () {
        return (
            <th className="table_cell-head" colSpan="2">
                {this.state.isEditing ?
                    <input className="editing" value={this.state.text} onChange={this.handleChange.bind(this)} onFocus={this.moveCaretAtEnd} autoFocus/> :
                    <span className="title" onClick={() => {this.handleClick(this.props.task.name)}}>{this.props.task.name}</span>}
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </th>
        );
    }

    moveCaretAtEnd (e) {
        let temp_value = e.target.value;

        e.target.value = '';

        e.target.value = temp_value;
    }

    // componentDidMount () {
    //     document.addEventListener('mousedown', this.pageClick.bind(this));
    // }
    
    // pageClick (e) {
    //     let editing = e.target.className === 'editing';

    //     if (!editing) this.setState({ isEditing: false });
    // }

    handleClick (value) {
        this.setState({
            isEditing: true,
            text: value
        });
    }

    handleChange (e) {
        console.log('change', e.target.value);
        this.setState({
            isEditing: true,
            text: e.target.value
        });
    }
}

export default Editing;