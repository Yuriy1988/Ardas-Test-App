import React from 'react';

import Header from '../Header';
import Table from '../Table';
import Pagination from '../Pagination';
import Task from '../Task';
import tasks from '../../data/tasks.json';

import './app.less';
import '../../assets/styles/common.less';

export default class App extends React.Component {
  // если нужен стейт - можешь делать так
  state = {
    tasks,  // записали сюда таски, так можно делать в ес6
    currentPage: 1,
    tasksPerPage: 10,
    selectedTask: null,
  };

  // конструктор тебе не нужен

  // порядок в классе обычно такой:
  // конструктор,
  // статические методы, если такие есть
  // жизненные циклы компонента, если такие есть
  // методы
  // метод render

  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  showTask(id) {
    this.setState({
      selectedTask: id,
    });
  }

  previousPage = () => {
    this.setState({
      selectedTask: null,
    });
  };
  // добавил метод, что бы сохранить имя таски
  updateTask = (id, name) => {
    this.setState({
      tasks: this.state.tasks.map(t => (t.id === id ? { ...t, name } : t)),
    });
  };

  // обрати внимание на форматирование если больше одного пропса - обычно пропсы пишут с новой строки
  // ты в Task передавал onClick={this.previousPage.bind(this)}
  // неочевидно, для чего ты будешь юзать onClick, лучше называть методы более понятно типа toMainPage
  // ты передаешь в тейбл   onClick={this.showTask.bind(this)}
  // onClick - не очевидное название метода, потому, что ты хендлишь клик на на таблице а на элементе таблицы
  // лучше тогда назвать метод selectTask или как-то так
  render() {
    const { tasks, selectedTask } = this.state;
    const task = tasks.find(t => t.id === selectedTask); // эту таску мы будем передавать в Task

    return (
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          {!selectedTask ?
            <div className="table-wrapper">
              <Table
                data={this.state}
                selectTask={this.showTask.bind(this)}
              />
              <Pagination
                data={this.state}
                onClick={this.changePage.bind(this)}
              />
            </div> :
            <div className="task-wrapper">
              <Task
                task={task}
                updateTask={this.updateTask}
                toMainPage={this.previousPage}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

// onClick={this.showTask.bind(this)}
// так делать плохо, потому, что каждый раз когда вызывается метод рендер - создается новая функция, и все дочерние компоненты будут перерендериваться
// это происходит даже у PureComponent, реакт сравнивает старые и полученные пропсы
// this.showTask.bind(this) !== this.showTask.bind(this), в то время как this.showTask.bind === this.showTask
// что бы не делать с биндом - можно биндить в конструкторе, а лучше добавить плагин babel. плагин называется transform-class-properties
// этот плагин позволяет писать методы в классе вот так  changePage = (page) => { и их вообще не надо биндить
