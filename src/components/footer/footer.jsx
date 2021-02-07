import React from 'react';
import PropsType from 'prop-types';
import TaskFilter from '../task-filter/task-filter';
import './footer.css';

const Footer = ({ countTasksLeft, clearCompletedTasks, selectTaskFilter, activeFilter }) => {
  function onKeyDownInfoHandler(evt) {
    if (evt.keyCode === 13) clearCompletedTasks();
    return '';
  }
  return (
    <footer className="footer">
      <span className="todo-count" > {`${countTasksLeft} items left`} </span>
      <TaskFilter activeFilter={activeFilter} selectTaskFilter={selectTaskFilter} />
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
  countTasksLeft: PropsType.number.isRequired,
  clearCompletedTasks: PropsType.func.isRequired,
  selectTaskFilter: PropsType.func.isRequired,
  activeFilter: PropsType.string.isRequired,
};

export default Footer;
