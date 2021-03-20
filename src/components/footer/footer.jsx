import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../task-filter/task-filter';
import './footer.css';

const Footer = ({ changeListToDo, filterFunc, activeFilter }) => {
  function clearCompletedTasks() {
    changeListToDo((old) => {
      const newListToDo = old.filter(({ className }) => className !== 'completed');
      return newListToDo;
    });
  }

  function onKeyDownInfoHandler(evt) {
    if (evt.keyCode === 13) clearCompletedTasks();
  }

  return (
    <footer className="footer">
      <span className="todo-count"> {`${filterFunc.countTasksLeft} items left`} </span>
      <TaskFilter filterFunc={filterFunc} activeFilter={activeFilter} />
      <span
        role="presentation"
        onClick={clearCompletedTasks}
        onKeyDown={onKeyDownInfoHandler}
        className="clear-completed"
      >
        Clear completed
      </span>
    </footer>
  );
};

Footer.propTypes = {
  filterFunc: PropTypes.shape({
    countTasksLeft: PropTypes.number.isRequired,
    filtersList: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectTaskFilter: PropTypes.func.isRequired,
  }).isRequired,
  changeListToDo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default Footer;
