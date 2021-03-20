import React from "react";
import "./app.css";
import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";
import useFilter from "../../hooks/useFilter";
import useListToDo from "../../hooks/useListToDo";
import useTaskEdit from "../../hooks/useTaskEdit";
import useCreateTask from "../../hooks/useCreateTask";

const App = () => {
  const { listToDo, activeFilter, setActiveFilter, changeListToDo } = useListToDo();

  const createTaskFunc = useCreateTask(changeListToDo, activeFilter);

  const filterFunc = useFilter(changeListToDo, setActiveFilter, listToDo);

  const taskFunc = useTaskEdit(changeListToDo, activeFilter);

  return (
    <section className="todoapp">
      <header className="header">
        <h1> ToDoS </h1>
        <NewTaskForm createTaskFunc={createTaskFunc} />
      </header>
      <section className="main">
        <TaskList taskList={listToDo} taskFunc={taskFunc} />
        <Footer
          changeListToDo={changeListToDo}
          activeFilter={activeFilter}
          filterFunc={filterFunc}
        />
      </section>
    </section>
  );
};

export default App;
