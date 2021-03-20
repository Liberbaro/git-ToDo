import React from 'react';
import PropTypes from 'prop-types';
import useEditing from '../../hooks/useEditing';

function EditingTask({ saveNewTaskValue, text }) {
  const { onChangeEditValue, onKeyDownEditValue } = useEditing(saveNewTaskValue, text);

  return (
    <input className="edit"
      type="text"
      maxLength="100"
      defaultValue={text}
      onChange={(evt) => onChangeEditValue(evt) }
      onKeyDown={onKeyDownEditValue}/>
  );
}

EditingTask.propTypes = {
  saveNewTaskValue: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default EditingTask;
