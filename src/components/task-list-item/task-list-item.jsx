import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';
import TaskToggle from '../task-toogle/task-toggle';

const TaskListItem = ({ className, display, ...props }) => {
  const inputField = <TaskToggle type="text" className="edit" {...props} />;
  return (
    <li className={className} style={{ display }}>
      <Task className="view" {...props} />
      {className === 'editing' ? inputField : null}
    </li>
  );
};

TaskListItem.propTypes = {
  className: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default TaskListItem;
