import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = { addTaskToListToDo: () => {} }

  static propTypes = { addTaskToListToDo: PropTypes.func }

  constructor() {
    super();
    this.mainInput = React.createRef();
  }

  state = {
    value: '',
    min: '',
    sec: '',
  };

  componentDidMount() {
    this.mainInput.current.focus();
  }

  onKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      const { value, min, sec } = this.state,
            { addTaskToListToDo } = this.props;
      if (value) {
        addTaskToListToDo(value, min, sec);
      }
      this.setState({
        value: '',
        min: '',
        sec: '',
      });
    }
  };

  clearValue = (dirtyValue, num, unit) => {
    let res = dirtyValue.replace(/[^\d]/g, '');
    if (res > num) res = `${num}`;
    return unit ? this.setState({ min: res }) : this.setState({ sec: res });
  };

  onChangeInput = (evt) => {
    const { value } = evt.target,
          { className } = evt.target;
    if (className === 'new-todo') this.setState({ value });
    if (className === 'new-todo-form__timer min') this.clearValue(value, 60, 'min');
    if (className === 'new-todo-form__timer sec') this.clearValue(value, 59);
  }

  render() {
    const { value, sec, min } = this.state;
    return (
      <div role="presentation"
        onKeyDown={this.onKeyDown}>
        <form className="new-todo-form">
          <input
            ref={this.mainInput}
            onChange={this.onChangeInput}
            className="new-todo"
            type="text"
            placeholder="Input do wish"
            maxLength="100"
            value={ value }
          />
          <input
            onChange={this.onChangeInput}
            className="new-todo-form__timer min"
            placeholder="Min" value={min} maxLength="2"/>
          <input
            onChange={this.onChangeInput}
            className="new-todo-form__timer sec"
            placeholder="Sec" value={sec} maxLength="2"/>
        </form>
      </div>

    );
  }
}
