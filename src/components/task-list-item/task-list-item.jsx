import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';
import EditingTask from '../editing-task/editing-task';

const TaskListItem = ({ className, display, ...props }) => {
  const inputField = <EditingTask type="text" className="edit" {...props} />;
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
