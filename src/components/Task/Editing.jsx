import React from 'react';

class Editing extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false,
            text: ''
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.pageClick = this.pageClick.bind(this);
    }

    render () {
        return (
            <th className="table_cell-head" colSpan="2">
                {this.state.isEditing ?
                    <input className="editing" value={this.state.text} onChange={this.handleChange.bind(this)} onFocus={this.moveCaretAtEnd} autoFocus/> :
                    <span className="title" 
                        onClick={() => {this.handleClick(this.state.text ? this.state.text : this.props.task.name)}}>
                        {this.state.text ? this.state.text : this.props.task.name}
                    </span>}
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </th>
        );
    }

    moveCaretAtEnd (e) {
        let temp_value = e.target.value;

        e.target.value = '';

        e.target.value = temp_value;
    }

    componentDidMount () {
        document.addEventListener('click', this.pageClick);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.pageClick);
    }

    pageClick (e) {
        let editing = e.target.className === 'editing',
            title = e.target.className === 'title';

        if (!editing && !title && this.state.isEditing) this.setState({ isEditing: false });
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

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