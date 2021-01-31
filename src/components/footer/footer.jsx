import React from 'react';
import PropsType from 'prop-types';
import FooterInfo from '../footer-info/footer-info';
import TaskFilter from '../task-filter/task-filter';
import './footer.css';

const Footer = ({ countTasksLeft, ...props }) => {
  return (
    <footer className="footer">
      <FooterInfo
        className="todo-count"
        label={`${countTasksLeft} items left`}
      />
      <TaskFilter {...props} />
      <FooterInfo
        {...props}
        className="clear-completed"
        label="Clear completed"
      />
    </footer>
  );
};

Footer.propTypes = { countTasksLeft: PropsType.number.isRequired };

export default Footer;
