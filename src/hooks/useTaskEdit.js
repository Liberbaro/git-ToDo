function useTaskEdit(changeListToDo, activeFilter) {
  const getTask = (id, arr) => {
    const index = arr.findIndex((el) => el.id === id);
    const task = arr[index];
    return task;
  };

  const onEditValue = (id) => {
    changeListToDo((old) => {
      const task = getTask(id, old);
      task.className = "editing";
      return old;
    });
  };

  const saveNewTaskValue = (id, newValue) => {
    changeListToDo((old) => {
      const task = getTask(id, old);
      task.text = newValue;
      task.className = task.done ? "completed" : "";
      return old;
    });
  };

  const onChangeTaskStatus = (id) => {
    changeListToDo((old) => {
      const task = getTask(id, old);
      task.className = task.done ? "" : "completed";
      task.done = !task.done;
      if (activeFilter === "all") task.display = "block";
      else task.display = task.className === activeFilter ? "block" : "none";
      return old;
    });
  };

  const onDelTask = (id) => {
    changeListToDo((old) => {
      const index = old.findIndex((el) => el.id === id);
      old.splice(index, 1);
      return old;
    });
  };
  const taskFunc = {
    onEditValue,
    saveNewTaskValue,
    onChangeTaskStatus,
    onDelTask,
  };
  return taskFunc;
}

export default useTaskEdit;
