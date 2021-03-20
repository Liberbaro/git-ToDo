import React from 'react';
import PropTypes from 'prop-types';
import './task-list.css';
import EditingTask from '../editing-task/editing-task';
import Task from '../task/task';

const TaskList = ({ taskFunc, taskList }) => {
  const { saveNewTaskValue, onChangeTaskStatus, onDelTask, onEditValue } = taskFunc;
  const taskLists = taskList.map((el) => {
    const { id, text, className, display, timeOfCreate, min, sec, done } = el;
    const inputField = <EditingTask text={text}
      saveNewTaskValue={(value) => saveNewTaskValue(id, value)}/>;
    return (
      <li key={id} className={className} style={{ display }}>
        <Task className="view"
          onChangeTaskStatus={() => onChangeTaskStatus(id)}
          onDelTask={() => onDelTask(id)}
          onEditValue={() => onEditValue(id)}
          text={text}
          min={min}
          sec={sec}
          done={done}
          timeOfCreate={timeOfCreate} />
        {className === 'editing' ? inputField : null}
      </li>
    );
  });

  return <ul className="todo-list">{taskLists}</ul>;
};

TaskList.defaultProps = { taskList: [] };

TaskList.propTypes = {
  taskFunc: PropTypes.objectOf(PropTypes.func).isRequired,
  taskList: PropTypes.instanceOf(Array),
};

export default TaskList;
