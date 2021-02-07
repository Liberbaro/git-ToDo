import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditingTask extends Component {
    static propTypes = {
      saveNewTaskValue: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
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
      const { saveNewTaskValue } = this.props;
      return evt.keyCode === 13 || evt.keyCode === 27 ? saveNewTaskValue(evt.target.value) : null;
    }

    onChangeInputFieldHandler=(evt) => {
      this.setState({ newValue: evt.target.value });
    }

    documentClickHandler =(evt) => {
      const { saveNewTaskValue } = this.props,
            { newValue } = this.state;
      return evt.target.className !== 'edit' ? saveNewTaskValue(newValue) : null;
    }

    render() {
      const { text } = this.props;
      return (
        <input className="edit"
          type="text"
          maxLength="40"
          defaultValue={text}
          onChange={(evt) => this.onChangeInputFieldHandler(evt) }
          onKeyDown={this.onKeyDownInputFieldHandler}/>
      );
    }
}
