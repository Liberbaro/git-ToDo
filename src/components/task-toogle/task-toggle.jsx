import React from 'react';
import PropTypes from 'prop-types';
import './task-toggle.css';

const TaskToggle = ({ type, className, changeTaskStatus, id }) => {
  return <input onClick={() => changeTaskStatus(id)} type={type} className={className}/>;
};

TaskToggle.defaultProps = { changeTaskStatus: () => {} };

TaskToggle.propTypes = {
  changeTaskStatus: PropTypes.func,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default TaskToggle;
