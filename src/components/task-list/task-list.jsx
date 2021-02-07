import React from 'react';
import PropTypes from 'prop-types';
import './task-list.css';
import EditingTask from '../editing-task/editing-task';
import Task from '../task/task';

const TaskList = (props) => {
  const { taskList, saveNewTaskValue, onChangeTaskStatus, onDelTask, onEditValue } = props,
        taskLists = taskList.map(({ id, text, className, display, timeOfCreate }) => {
          const inputField = <EditingTask text={text}
            saveNewTaskValue={(value) => saveNewTaskValue(id, value)}/>;
          return (
            <li key={id} className={className} style={{ display }}>
              <Task className="view"
                onChangeTaskStatus={() => onChangeTaskStatus(id)}
                onDelTask={() => onDelTask(id)}
                onEditValue={() => onEditValue(id)}
                text={text}
                timeOfCreate={timeOfCreate} />
              {className === 'editing' ? inputField : null}
            </li>
          );
        });

  return <ul className="todo-list">{taskLists}</ul>;
};

TaskList.defaultProps = { taskList: [] };

TaskList.propTypes = {
  taskList: PropTypes.instanceOf(Array),
  saveNewTaskValue: PropTypes.func.isRequired,
  onChangeTaskStatus: PropTypes.func.isRequired,
  onDelTask: PropTypes.func.isRequired,
  onEditValue: PropTypes.func.isRequired,
};

export default TaskList;
