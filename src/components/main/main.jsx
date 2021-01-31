import React from 'react';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './main.css';

const Main = (props) => {
  return (
    <section className="main">
      <TaskList {...props} />
      <Footer {...props} />
    </section>
  );
};

export default Main;
