import React from 'react';
import PropTypes from 'prop-types';

const TaskButton = ({ className, taskBtnFn, id }) => {
  return <button className={className} onClick={() => taskBtnFn(id)} type="button"/>;
};

TaskButton.defaultProps = {
  taskBtnFn: () => {},
  className: '',
};

TaskButton.propTypes = {
  taskBtnFn: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default TaskButton;
