import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends Component {
    static defaultProps = {
      className: 'view',
      onEditValue: () => {},
      onDelTask: () => {},
    };

    static propTypes = {
      className: PropTypes.string,
      onEditValue: PropTypes.func,
      onDelTask: PropTypes.func,
      timeOfCreate: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      onChangeTaskStatus: PropTypes.func.isRequired,
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
      const {
              className,
              onChangeTaskStatus,
              onDelTask,
              onEditValue,
              text,
            } = this.props,
            { time } = this.state;
      return (
        <div className={className}>
          <input className="toggle" onClick={onChangeTaskStatus} type="checkbox"/>
          <label>
            <span className="description"> {text} </span>
            <span className="created"> created {`${time}`} ago </span>
          </label>
          <button className="icon icon-edit" type="button" onClick={onEditValue}/>
          <button className="icon icon-destroy" type="button" onClick={onDelTask}/>
        </div>
      );
    }
}
