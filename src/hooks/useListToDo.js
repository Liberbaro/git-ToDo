import { useState } from 'react';
import produce from 'immer';

const useListToDo = () => {
  const [listToDo, setListToDo] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const changeListToDo = (fn) => setListToDo(produce(fn));
  return { listToDo, activeFilter, setActiveFilter, changeListToDo };
};

export default useListToDo;
