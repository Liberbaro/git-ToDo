import React, { Component } from 'react';
import produce from 'immer';
import './app.css';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

export default class App extends Component {
  taskId = 100;

  state = {
    listToDo: [],
    activeFilter: 'all',
  };

  addTaskToListToDo = (text, min = 0, sec = 0) => {
    this.changeListToDo(({ listToDo }) => {
      const newTask = this.createNewTask(text, min, sec);
      listToDo.unshift(newTask);
    });
  };

  onEditValue = (id) => {
    this.changeListToDo(({ listToDo }) => {
      const task = this.getTask(id, listToDo);
      task.className = 'editing';
    });
  }

  saveNewTaskValue = (id, newValue) => {
    this.changeListToDo(({ listToDo }) => {
      const task = this.getTask(id, listToDo);
      task.text = newValue;
      task.className = task.done ? 'completed' : '';
    });
  }

  onChangeTaskStatus = (id) => {
    this.changeListToDo(({ listToDo }) => {
      const task = this.getTask(id, listToDo),
            { activeFilter } = this.state;
      task.className = task.done ? '' : 'completed';
      task.done = !task.done;
      if (activeFilter === 'all') task.display = 'block';
      else task.display = task.className === activeFilter ? 'block' : 'none';
    });
  };

  onDelTask = (id) => {
    this.changeListToDo(({ listToDo }) => {
      const index = listToDo.findIndex((el) => el.id === id);
      listToDo.splice(index, 1);
    });
  };

  changeListToDo = (fn) => {
    this.setState(produce(fn));
  };

  test = (fn) => {
    this.changeListToDo(fn);
  };

  getTask = (id, arr) => {
    const index = arr.findIndex((el) => el.id === id),
          task = arr[index];
    return task;
  }

  createNewTask(text, min, sec) {
    const { activeFilter } = this.state;
    return {
      text,
      min,
      sec,
      className: '',
      id: this.taskId++,
      done: false,
      display: activeFilter === 'completed' ? 'none' : 'block',
      timeOfCreate: new Date().getTime(),
    };
  }

  render() {
    const { listToDo, activeFilter } = this.state,
          countTasksLeft = listToDo.filter(({ done }) => !done).length;
    return (
      <section className="todoapp">
        <header className="header">
          <h1> ToDoS </h1>
          <NewTaskForm addTaskToListToDo={this.addTaskToListToDo} />
        </header>
        <section className="main">
          <TaskList taskList={listToDo}
            saveNewTaskValue={this.saveNewTaskValue}
            onChangeTaskStatus={this.onChangeTaskStatus}
            onEditValue={this.onEditValue}
            onDelTask={this.onDelTask}
          />
          <Footer countTasksLeft={countTasksLeft}
            activeFilter={activeFilter}
            test={this.test}
          />
        </section>
      </section>

    );
  }
}
