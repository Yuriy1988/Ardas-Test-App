import React, { Component } from 'react';

import '../../assets/styles/font-awesome/font-awesome.less';
import './pagination.less';

// вместо <i></i> в реакте юзают <i />

class Pagination extends Component {
  getData() {
    // этот метод хороший - так делать правильно :)
    // не объявляй переменную props, это может ввести в заблуждение
    // через запятую в реакте не принято объявлять, исплоьзуй let только там где надо
    const { data } = this.props;
    const { tasks } = data;
    const filtered = tasks.filter(task => task.obj_status === 'active');
    const length = filtered.length;
    const page = data.currentPage;
    const pages = Math.ceil(length / data.tasksPerPage);
    const isFirstPage = page === 1;
    const isLastPage = page === pages;

    // тебе не надо писать { page: page }
    // в es6 можно писать так:

    return {
      page,
      pages,
      isFirstPage,
      isLastPage,
    };
  }

  // лучше не писать так handleClick, напиши две функции будет проще читаться
  // и я порефакторил метод рендер, тебе не надо два разных <i> посмотри, как можно менять класс интерполируемой строкой
  // метод getPageStatus - в принципе не нужен, принято прям из данных вытягивать данные в темплейт

  handlePrevClick = () => {
    const data = this.getData();
    const { page, isFirstPage } = data;
    return !isFirstPage && this.props.onClick(page - 1);
  };

  handleNextClick = () => {
    const data = this.getData();
    const { page, isLastPage } = data;
    return !isLastPage && this.props.onClick(page + 1);
  };


  render() {
    const data = this.getData();
    const { isFirstPage, isLastPage } = data;

    return (
      <div className="pagination">
        <span className="pages"> page ${data.page} of ${data.pages} </span>
        <div className="arrows">
          <i
            className={`fa fa-chevron-left ${isFirstPage && 'disabled'}`}
            onClick={this.handlePrevClick}
          />
          <i
            className={`fa fa-chevron-right ${isLastPage && 'disabled'}`}
            onClick={this.handleNextClick}
          />
        </div>
      </div>
    );
  }
}

export default Pagination;
