/* eslint-disable */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./new-task-form.css";

function NewTaskForm({ createTaskFunc }) {
  const { onKeyDown, onChangeInput, minutes, seconds, value } = createTaskFunc;
  const mainInput = React.createRef();

  useEffect(() => {
    if (mainInput) mainInput.current.focus();
  }, []);

  return (
    <div role="presentation" onKeyDown={onKeyDown}>
      <form className="new-todo-form">
        <input
          ref={mainInput}
          onChange={onChangeInput}
          className="new-todo"
          type="text"
          placeholder="Input do wish"
          maxLength="100"
          value={value}
        />
        `
        <input
          onChange={onChangeInput}
          className="new-todo-form__timer min"
          placeholder="Min"
          value={minutes}
          maxLength="2"
        />
        <input
          onChange={onChangeInput}
          className="new-todo-form__timer sec"
          placeholder="Sec"
          value={seconds}
          maxLength="2"
        />
      </form>
    </div>
  );
}

NewTaskForm.propTypes = {
  createTaskFunc: PropTypes.shape({
    onKeyDown: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewTaskForm;
