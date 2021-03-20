import React from 'react';
import PropTypes from 'prop-types';
import './task.css';
import useTask from "../../hooks/useTask";

function Task(props) {
  const { className, text } = props;
  const { min, sec, time, classTimer, onClickButtonHandler } = useTask(props);

  return (
    <div role="presentation" className={className} onClick={onClickButtonHandler}>
      <input className="toggle" type="checkbox" />
      <label>
        <span className="title">{text}</span>
        <span className="description">
          {min || sec ? <button type="button" className={classTimer()} /> : null}
          {min || sec ? `${min} : ${sec}` : null}
        </span>
        <span className="created"> created {`${time}`} ago </span>
      </label>
      <button className="icon icon-edit" type="button" />
      <button className="icon icon-destroy" type="button" />
    </div>
  );
}

Task.defaultProps = { className: 'view'};

Task.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Task;
