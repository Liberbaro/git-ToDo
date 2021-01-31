import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterButton from '../filter-button/filter-button';
import './task-filter.css';

export default class TaskFilter extends Component {
  static propTypes = { selectTaskFilter: PropTypes.func.isRequired };

  key = 1;

  state = {
    filtersList: [
      { label: 'All', className: 'selected', key: 10, mainClass: 'all' },
      { label: 'Active', className: '', key: 20, mainClass: '' },
      { label: 'Completed', className: '', key: 30, mainClass: 'completed' },
    ],
  };

  changeSelectedFilter = (label) => {
    const { selectTaskFilter } = this.props;
    this.setState(({ filtersList }) => {
      const newFilterList = filtersList.map((el) => {
        el.className = el.label === label ? 'selected' : '';
        if (el.className === 'selected') selectTaskFilter(el.mainClass);
        return el;
      });
      return { filter: newFilterList };
    });
  };

  render() {
    const { filtersList } = this.state,
          filterItem = filtersList.map(({ ...item }) => {
            return (
              <li key={this.key++}>
                <FilterButton
                  onClickTaskFilterBtnHandler={this.changeSelectedFilter}
                  {...item}
                />
              </li>
            );
          });
    return <ul className="filters">{filterItem}</ul>;
  }
}
