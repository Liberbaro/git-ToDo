import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = { addTaskToListToDo: () => {} }

  static propTypes = { addTaskToListToDo: PropTypes.func }

  state = { value: '' };

  onSubmitFormHandler = (evt) => {
    evt.preventDefault();
    const { value } = this.state,
          { addTaskToListToDo } = this.props;
    addTaskToListToDo(value);
    this.setState({ value: '' });
  };

  onChangeInputHandler = (evt) => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmitFormHandler}>
        <input
          onChange={this.onChangeInputHandler}
          className="new-todo"
          type="text"
          placeholder="Input do wish"
          maxLength="40"
          value={ value }
        />
      </form>
    );
  }
}
