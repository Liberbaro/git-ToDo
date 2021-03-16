import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../task-filter/task-filter';
import './footer.css';

// eslint-disable-next-line react/prop-types
const Footer = ({ test, countTasksLeft, activeFilter }) => {
  function clearCompletedTasks() {
    test(({ listToDo }) => {
      const newListToDo = listToDo.filter(({ className }) => className !== 'completed');
      return { listToDo: newListToDo };
    });
  }

  function onKeyDownInfoHandler(evt) {
    if (evt.keyCode === 13) clearCompletedTasks();
    return '';
  }

  return (
    <footer className="footer">
      <span className="todo-count" > {`${countTasksLeft} items left`} </span>
      <TaskFilter test={test} activeFilter={activeFilter} />
      <span
        role="presentation"
        onClick={clearCompletedTasks}
        onKeyDown={onKeyDownInfoHandler}
        className="clear-completed" >
        Clear completed
      </span>
    </footer>
  );
};

Footer.propTypes = {
  countTasksLeft: PropTypes.number.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default Footer;
