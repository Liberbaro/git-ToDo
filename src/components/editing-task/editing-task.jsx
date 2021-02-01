import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditingTask extends Component {
    static propTypes = {
      saveNewTaskValue: PropTypes.func.isRequired,
      className: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    };

    // eslint-disable-next-line react/destructuring-assignment
    state = { newValue: this.props.text }

    componentDidMount() {
      document.addEventListener('mousedown', this.documentClickHandler);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.documentClickHandler);
    }

    onKeyDownInputFieldHandler= (evt) => {
      const { id, saveNewTaskValue } = this.props;
      return evt.keyCode === 13 ? saveNewTaskValue(id, evt.target.value) : null;
    }

    onChangeInputFieldHandler=(evt) => {
      this.setState({ newValue: evt.target.value });
    }

    documentClickHandler =(evt) => {
      const { id, saveNewTaskValue } = this.props,
            { newValue } = this.state;
      return evt.target.className !== 'edit' ? saveNewTaskValue(id, newValue) : null;
    }

    render() {
      const { className, type, text } = this.props;
      return (
        <input
          onChange={(evt) => this.onChangeInputFieldHandler(evt) }
          onKeyDown={this.onKeyDownInputFieldHandler}
          defaultValue={text}
          type={type}
          maxLength="40"
          className={className}/>
      );
    }
}
