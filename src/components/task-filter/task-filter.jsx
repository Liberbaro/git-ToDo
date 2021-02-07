import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FilterButton from '../filter-button/filter-button';
import './task-filter.css';

export default class TaskFilter extends Component {
  static propTypes = {
    test: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired,
  };

  state = {
    filtersList: [
      { label: 'All', mainClass: 'all' },
      { label: 'Active', mainClass: '' },
      { label: 'Completed', mainClass: 'completed' },
    ],
  };

    selectTaskFilter = (label) => {
      const { test } = this.props;
      test((draft) => {
        draft.listToDo.map((el) => {
          if (label === 'all') el.display = 'block';
          else el.display = el.className === label ? 'block' : 'none';
          return el;
        });
        draft.activeFilter = label;
      });
    }

    render() {
      const { filtersList } = this.state,
            { activeFilter } = this.props,
            filterButtons = filtersList.map(({ label, mainClass }) => {
              const selected = activeFilter === mainClass ? 'selected' : '';
              return (
                <li key={label}>
                  <button
                    onClick={() => this.selectTaskFilter(mainClass)}
                    className={selected}
                    type="button" >
                    {label}
                  </button>
                </li>
              );
            });
      return <ul className="filters">{filterButtons}</ul>;
    }
}
