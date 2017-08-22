import React from 'react';

class Editing extends React.Component {
  // state можно так объявлять, без конструктора
  state = {
    isEditing: false,
    text: this.props.task.name,
  };
  // сразу записали в стейт текст имя выбранной таски

  handleClick = () => this.setState({ isEditing: true });

  handleChange = e => this.setState({ text: e.target.value  });

  updateTask = () => {
    const { id } = this.props.task;
    this.props.updateTask(id, this.state.text);
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <th className="table_cell-head" colSpan="2">
        {this.state.isEditing
          ? <input
            className="editing"
            value={this.state.text}
            onChange={this.handleChange}
            onBlur={this.updateTask}
            autoFocus
          />
          : <span
            className="title"
            onClick={this.handleClick}
          >{this.props.task.name}</span>
        }
        <i className="fa fa-pencil-square-o" />
      </th>
    );
  }
}

export default Editing;
