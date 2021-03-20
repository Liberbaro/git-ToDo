import React from 'react';
import './app.css'
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import useFilter from '../../hooks/useFilter';
import useListToDo from '../../hooks/useListToDo';
import useTaskEdit from '../../hooks/useTaskEdit';
import useCreateTask from '../../hooks/useCreateTask';

const App = () => {
  const { listToDo, activeFilter, setActiveFilter, changeListToDo } = useListToDo();
  const taskFormFunc = useCreateTask(changeListToDo, activeFilter);
  const filterFunc = useFilter(changeListToDo, setActiveFilter, listToDo);
  const taskFunc = useTaskEdit(changeListToDo, activeFilter);
  return (
    <section className="todoapp">
      <header className="header">
        <h1> ToDoS </h1>
        <NewTaskForm taskFormFunc={taskFormFunc} />
      </header>
      <section className="main">
        <TaskList taskList={listToDo} taskFunc={taskFunc}/>
        <Footer changeListToDo={changeListToDo} activeFilter={activeFilter} filterFunc={filterFunc}/>
      </section>
    </section>
  );
};

export default App;

//
// const App = () => {
//   const [listToDo, setListToDo] = useState([]);
//   const [activeFilter, setActiveFilter] = useState('all');
//
//   const createNewTask = (text, min, sec) => {
//     return {
//       text,
//       min,
//       sec,
//       className: '',
//       id: Date.now(),
//       done: false,
//       display: activeFilter === 'completed' ? 'none' : 'block',
//       timeOfCreate: new Date().getTime(),
//     };
//   };
//
//   const changeListToDo = (fn) => {
//     setListToDo(produce(fn));
//   };
//
//   // eslint-disable-next-line no-unused-vars
//   const changeActiveFilter = (fn) => {
//     setActiveFilter(produce(fn));
//   };
//
//   const addTaskToListToDo = (text, min = 0, sec = 0) => {
//     changeListToDo((oldList) => {
//       const newList = oldList;
//       const newTask = createNewTask(text, min, sec);
//       newList.unshift(newTask);
//       return newList;
//     });
//   };
//
//   const getTask = (id, arr) => {
//     const index = arr.findIndex((el) => el.id === id);
//     const task = arr[index];
//     return task;
//   };
//
//   const onEditValue = (id) => {
//     changeListToDo((old) => {
//       const task = getTask(id, old);
//       task.className = 'editing';
//       return old;
//     });
//   };
//
//   const saveNewTaskValue = (id, newValue) => {
//     changeListToDo((old) => {
//       const task = getTask(id, old);
//       task.text = newValue;
//       task.className = task.done ? 'completed' : '';
//       return old;
//     });
//   };
//
//   const onChangeTaskStatus = (id) => {
//     changeListToDo((old) => {
//       const task = getTask(id, old);
//       task.className = task.done ? '' : 'completed';
//       task.done = !task.done;
//       if (activeFilter === 'all') task.display = 'block';
//       else task.display = task.className === activeFilter ? 'block' : 'none';
//       return old;
//     });
//   };
//
//   const onDelTask = (id) => {
//     changeListToDo((old) => {
//       const index = old.findIndex((el) => el.id === id);
//       old.splice(index, 1);
//       return old;
//     });
//   };
//
//   const changeFilter = (fn1, fn2 = null) => {
//     changeListToDo(fn1);
//     if (fn2) changeActiveFilter(fn2);
//   };
//
//   const filterButtons = useFilter(changeFilter, activeFilter);
//
//   const countTasksLeft = listToDo.filter(({ done }) => !done).length;
//   return (
//     <section className="todoapp">
//       <header className="header">
//         <h1> ToDoS </h1>
//         <NewTaskForm addTaskToListToDo={addTaskToListToDo} />
//       </header>
//       <section className="main">
//         <TaskList taskList={listToDo}
//                   saveNewTaskValue={saveNewTaskValue}
//                   onChangeTaskStatus={onChangeTaskStatus}
//                   onEditValue={onEditValue}
//                   onDelTask={onDelTask}
//         />
//         <Footer countTasksLeft={countTasksLeft}
//                 activeFilter={activeFilter}
//                 changeFilter={changeFilter}
//                 filterButtons={filterButtons}
//         />
//       </section>
//     </section>
//   );
// };
//
// export default App;

//
// export default class App extends Component {
//   taskId = 100;
//
//   state = {
//     listToDo: [],
//     activeFilter: 'all',
//   };
//
//   addTaskToListToDo = (text, min = 0, sec = 0) => {
//     this.changeListToDo(({ listToDo }) => {
//       const newTask = this.createNewTask(text, min, sec);
//       listToDo.unshift(newTask);
//     });
//   };
//
//   onEditValue = (id) => {
//     this.changeListToDo(({ listToDo }) => {
//       const task = this.getTask(id, listToDo);
//       task.className = 'editing';
//     });
//   }
//
//   saveNewTaskValue = (id, newValue) => {
//     this.changeListToDo(({ listToDo }) => {
//       const task = this.getTask(id, listToDo);
//       task.text = newValue;
//       task.className = task.done ? 'completed' : '';
//     });
//   }
//
//   onChangeTaskStatus = (id) => {
//     this.changeListToDo(({ listToDo }) => {
//       const task = this.getTask(id, listToDo),
//         { activeFilter } = this.state;
//       task.className = task.done ? '' : 'completed';
//       task.done = !task.done;
//       if (activeFilter === 'all') task.display = 'block';
//       else task.display = task.className === activeFilter ? 'block' : 'none';
//     });
//   };
//
//   onDelTask = (id) => {
//     this.changeListToDo(({ listToDo }) => {
//       const index = listToDo.findIndex((el) => el.id === id);
//       listToDo.splice(index, 1);
//     });
//   };
//
//   changeListToDo = (fn) => {
//     this.setState(produce(fn));
//   };
//
//   test = (fn) => {
//     this.changeListToDo(fn);
//   };
//
//   getTask = (id, arr) => {
//     const index = arr.findIndex((el) => el.id === id),
//       task = arr[index];
//     return task;
//   }
//
//   createNewTask(text, min, sec) {
//     const { activeFilter } = this.state;
//     return {
//       text,
//       min,
//       sec,
//       className: '',
//       id: this.taskId++,
//       done: false,
//       display: activeFilter === 'completed' ? 'none' : 'block',
//       timeOfCreate: new Date().getTime(),
//     };
//   }
//
//   render() {
//     const { listToDo, activeFilter } = this.state,
//       countTasksLeft = listToDo.filter(({ done }) => !done).length;
//     return (
//       <section className="todoapp">
//         <header className="header">
//           <h1> ToDoS </h1>
//           <NewTaskForm addTaskToListToDo={this.addTaskToListToDo} />
//         </header>
//         <section className="main">
//           <TaskList taskList={listToDo}
//                     saveNewTaskValue={this.saveNewTaskValue}
//                     onChangeTaskStatus={this.onChangeTaskStatus}
//                     onEditValue={this.onEditValue}
//                     onDelTask={this.onDelTask}
//           />
//           <Footer countTasksLeft={countTasksLeft}
//                   activeFilter={activeFilter}
//                   test={this.test}
//           />
//         </section>
//       </section>
//
//     );
//   }
// }
