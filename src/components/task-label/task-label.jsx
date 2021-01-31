import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class TaskLabel extends Component {
  static propTypes = {
    timeOfCreate: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  };

  // eslint-disable-next-line react/destructuring-assignment
  state = { time: formatDistanceToNow(this.props.timeOfCreate, { includeSeconds: true }) };

  tick = () => {
    const { timeOfCreate } = this.props,
          timeAfterCreations = formatDistanceToNow(timeOfCreate, { includeSeconds: true });
    this.setState({ time: timeAfterCreations });
  };

  componentDidMount = () => {
    this.intervalID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  render() {
    const { text } = this.props,
          { time } = this.state;
    return (
      <label>
        <span className="description"> {text} </span>
        <span className="created"> created {`${time}`} ago </span>
      </label>
    );
  }
}
