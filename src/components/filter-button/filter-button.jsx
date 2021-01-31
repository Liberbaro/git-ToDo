import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({ label, className, onClickTaskFilterBtnHandler }) => {
  return (
    <button
      onClick={() => onClickTaskFilterBtnHandler(label)}
      className={className}
      label={label}
      type="button"
    >
      {label}
    </button>
  );
};

FilterButton.propTypes = {
  onClickTaskFilterBtnHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FilterButton;
