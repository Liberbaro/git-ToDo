import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import './app.css';

export default class App extends Component {
  taskId = 100;

  state = {
    listToDo: [],
    activeFilter: 'all',
  };

  addTaskToListToDo = (text) => {
    this.changeListToDo(100, (newListToDo) => {
      const newTask = this.createNewTask(text);
      newListToDo.unshift(newTask);
    });
  };

  clearCompletedTasks = () => {
    this.setState(({ listToDo }) => {
      const newListToDo = listToDo.filter(
        ({ className }) => className !== 'completed',
      );
      return { listToDo: newListToDo };
    });
  };

  editTaskValue = (id) => {
    this.changeListToDo(id, (arg1, arg2, task) => {
      task.className = 'editing';
    });
  };

  saveNewTaskValue = (id, newValue) => {
    // if (evt.target.className !== 'edit')
    this.changeListToDo(id, (arg, arg2, task) => {
      task.text = newValue;
      task.className = task.done ? 'completed' : '';
    });
  };

  changeTaskStatus = (id) => {
    this.changeListToDo(id, (arg1, arg2, task) => {
      task.className = task.done ? '' : 'completed';
      task.done = !task.done;
      const { activeFilter } = this.state;
      if (activeFilter === 'all') task.display = 'block';
      else task.display = task.className === activeFilter ? 'block' : 'none';
    });
  };

  removeTaskFromToDoList = (id) => {
    this.changeListToDo(id, (newListToDo, index) => newListToDo.splice(index, 1));
  };

  selectTaskFilter = (label) => {
    this.changeListToDo(100, (newListToDo) => {
      newListToDo.map((el) => {
        if (label === 'all') el.display = 'block';
        else el.display = el.className === label ? 'block' : 'none';
        return el;
      });
    });
    this.setState({ activeFilter: label });
  };

  changeListToDo = (id, cb) => {
    this.setState(() => {
      const { listToDo } = this.state,
            newListToDo = JSON.parse(JSON.stringify(listToDo)),
            index = newListToDo.findIndex((el) => el.id === id),
            task = newListToDo[index];
      cb(newListToDo, index, task);
      return { listToDo: newListToDo };
    });
  };

  createNewTask(text) {
    const { activeFilter } = this.state;
    return {
      text,
      className: '',
      id: this.taskId++,
      done: false,
      display: activeFilter === 'completed' ? 'none' : 'block',
      timeOfCreate: new Date().getTime(),
    };
  }

  render() {
    const { listToDo } = this.state,
          countTasksLeft = listToDo.filter(({ done }) => !done).length;
    return (
      <section className="todoapp">
        <Header addTaskToListToDo={this.addTaskToListToDo}/>
        <Main
          taskList={listToDo}
          countTasksLeft={countTasksLeft}
          clearCompletedTasks={this.clearCompletedTasks}
          selectTaskFilter={this.selectTaskFilter}
          saveNewTaskValue={this.saveNewTaskValue}
          changeTaskStatus={this.changeTaskStatus}
          editTaskValue={this.editTaskValue}
          removeTaskFromToDoList={this.removeTaskFromToDoList} />
      </section>
    );
  }
}
