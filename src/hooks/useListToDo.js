/* eslint-disable */
import { useState, useEffect } from "react";
import produce from "immer";

const useListToDo = () => {
  const [listToDo, setListToDo] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const changeListToDo = (fn) => setListToDo(produce(fn));

  // const createNewTask = (text, min, sec) => {
  //   return {
  //     text,
  //     min,
  //     sec,
  //     className: '',
  //     id: Date.now(),
  //     done: false,
  //     display: activeFilter === 'completed'? 'none' : 'block',
  //     timeOfCreate: new Date().getTime(),
  //   };
  // };
  //
  // const addTaskToListToDo = (text, min = 0, sec = 0) => {
  //   changeListToDo((oldList) => {
  //     const newList = oldList;
  //     console.log(activeFilter);
  //     const newTask = createNewTask(text, min, sec);
  //     newList.unshift(newTask);
  //     return newList;
  //   });
  // };

  // eslint-disable-next-line max-len
  return {
    listToDo,
    activeFilter,
    setActiveFilter,
    // addTaskToListToDo,
    changeListToDo,
  };
};

export default useListToDo;
