import React from 'react';
import PropTypes from 'prop-types';
import TaskToggle from '../task-toogle/task-toggle';
import TaskButton from '../task-button/task-button';
import TaskLabel from '../task-label/task-label';

const Task = ({ className, display, removeTaskFromToDoList, editTaskValue, ...props }) => {
  return (
    <div className={className}>
      <TaskToggle className="toggle" type="checkbox" {...props} />
      <TaskLabel {...props} />
      <TaskButton taskBtnFn={editTaskValue} {...props} className="icon icon-edit" />
      <TaskButton taskBtnFn={removeTaskFromToDoList} {...props} className="icon icon-destroy"/>
    </div>
  );
};

Task.defaultProps = {
  className: 'view',
  display: 'block',
  editTaskValue: () => {},
  removeTaskFromToDoList: () => {},
};

Task.propTypes = {
  className: PropTypes.string,
  display: PropTypes.string,
  editTaskValue: PropTypes.func,
  removeTaskFromToDoList: PropTypes.func,
};

export default Task;
