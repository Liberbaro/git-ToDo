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

  addTaskToListToDo = (text) => {
    this.changeListToDo(({ listToDo }) => {
      const newTask = this.createNewTask(text);
      listToDo.unshift(newTask);
    });
  };

  clearCompletedTasks = () => {
    this.changeListToDo(({ listToDo }) => {
      const newListToDo = listToDo.filter(({ className }) => className !== 'completed');
      return { listToDo: newListToDo };
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

  selectTaskFilter = (label) => {
    this.changeListToDo((draft) => {
      draft.listToDo.map((el) => {
        if (label === 'all') el.display = 'block';
        else el.display = el.className === label ? 'block' : 'none';
        return el;
      });
      draft.activeFilter = label;
    });
  };

  changeListToDo = (fn) => {
    this.setState(produce(fn));
  };

  getTask = (id, arr) => {
    const index = arr.findIndex((el) => el.id === id),
          task = arr[index];
    return task;
  }

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
            selectTaskFilter={this.selectTaskFilter}
            clearCompletedTasks={this.clearCompletedTasks}
            activeFilter={activeFilter}
          />
        </section>
      </section>

    );
  }
}
