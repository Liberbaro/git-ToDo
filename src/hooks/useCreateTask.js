import { useState } from 'react';

const useCreateTask = (changeListToDo, activeFilter) => {
  const [value, setValue] = useState('');
  const [minutes, setMin] = useState('');
  const [seconds, setSec] = useState('');

  const createNewTask = (text, min, sec) => {
    return {
      text,
      min,
      sec,
      className: '',
      id: Date.now(),
      done: false,
      display: activeFilter === 'completed' ? 'none' : 'block',
      timeOfCreate: new Date().getTime(),
    };
  };

  const addTaskToListToDo = (text, min = 0, sec = 0) => {
    changeListToDo((oldList) => {
      const newList = oldList;
      const newTask = createNewTask(text, min, sec);
      newList.unshift(newTask);
      return newList;
    });
  };

  const onKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      if (value) {
        addTaskToListToDo(value, minutes, seconds);
      }
      setValue('');
      setMin('');
      setSec('');
    }
  };

  const clearValue = (dirtyValue, num, unit) => {
    let res = dirtyValue.replace(/[^\d]/g, '');
    if (res > num) res = `${num}`;
    return unit ? setMin(res) : setSec(res);
  };

  const onChangeInput = (evt) => {
    const { value: newValue } = evt.target;
    const { className } = evt.target;
    const timer = 'new-todo-form__timer';
    if (className === 'new-todo') setValue(newValue);
    if (className === `${timer} min`) clearValue(newValue, 59, 'min');
    if (className === `${timer} sec`) clearValue(newValue, 59);
  };

  const createTaskFunc = { onKeyDown, onChangeInput, minutes, seconds, value };
  return createTaskFunc;
};

export default useCreateTask;
