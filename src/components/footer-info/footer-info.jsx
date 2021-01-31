import React from 'react';
import PropsType from 'prop-types';
import './footer-info.css';

const FooterInfo = ({ label, className, clearCompletedTasks }) => {
  function onKeyDownInfoHandler(evt) {
    if (evt.keyCode === 13) clearCompletedTasks();
    return '';
  }

  return (
    <span
      role="presentation"
      onClick={clearCompletedTasks}
      onKeyDown={onKeyDownInfoHandler}
      className={className} >
      {label}
    </span>
  );
};

FooterInfo.defaultProps = { clearCompletedTasks: () => {} };

FooterInfo.propTypes = {
  clearCompletedTasks: PropsType.func,
  className: PropsType.string.isRequired,
  label: PropsType.string.isRequired,
};

export default FooterInfo;
