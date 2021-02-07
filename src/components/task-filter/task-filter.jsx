import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FilterButton from '../filter-button/filter-button';
import './task-filter.css';

export default class TaskFilter extends Component {
  static propTypes = { selectTaskFilter: PropTypes.func.isRequired };

  state = {
    filtersList: [
      { label: 'All', mainClass: 'all' },
      { label: 'Active', mainClass: '' },
      { label: 'Completed', mainClass: 'completed' },
    ],
  };

  render() {
    const { filtersList, activeFilter } = this.state,
          { selectTaskFilter } = this.props,
          filterButtons = filtersList.map(({ label, mainClass }) => {
            const selected = activeFilter === mainClass ? 'selected' : '';
            return (
              <li key={label}>
                <button
                  onClick={() => selectTaskFilter(mainClass)}
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
