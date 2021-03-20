import { useState, useEffect } from 'react';

const useEditing = (saveNewTaskValue, text) => {
  const [newValue, setNewValues] = useState(`${text}`);

  const saveValueAfterClick = (evt) => {
    return evt.target.className !== 'edit' ? saveNewTaskValue(newValue) : null;
  };

  useEffect(() => {
    document.addEventListener('mousedown', saveValueAfterClick);
    return () => document.removeEventListener('mousedown', saveValueAfterClick);
  }, [newValue]);

  const onKeyDownEditValue = (evt) => {
    return evt.keyCode === 13 || evt.keyCode === 27 ? saveNewTaskValue(newValue) : null;
  };

  const onChangeEditValue = (evt) => {
    setNewValues(evt.target.value);
  };

  return { onChangeEditValue, onKeyDownEditValue };
};

export default useEditing;
