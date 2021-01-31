import React from 'react';
import PropTypes from 'prop-types';
import './task-toggle.css';

const TaskToggle = ({ className, type, text, changeTaskStatus, id, saveNewTaskValue }) => {
  function onKeyDownInputFieldHandler(evt) {
    return evt.keyCode === 13 ? saveNewTaskValue(id, evt) : null;
  }

  const inputField = (
          <input
            onKeyDown={onKeyDownInputFieldHandler}
            defaultValue={text}
            type={type}
            className={className} />
        ),
        checkbox = (
          <input onClick={() => changeTaskStatus(id)} type={type} className={className} />
        );

  return className === 'edit' ? inputField : checkbox;
};

TaskToggle.defaultProps = {
  saveEditingTask: () => {},
  changeTaskStatus: () => {},
};

TaskToggle.propTypes = {
  saveEditingTask: PropTypes.func,
  changeTaskStatus: PropTypes.func,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskToggle;
