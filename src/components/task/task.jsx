/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import "./task.css";

function Task({
  className,
  text,
  timeOfCreate,
  min: defMin,
  sec: defSec,
  onChangeTaskStatus,
  onEditValue,
  onDelTask,
  done,
}) {
  const [time, setTime] = useState(
    formatDistanceToNow(timeOfCreate, { includeSeconds: true })
  );
  const [timer, setTimerUpdate] = useState(null);
  const [timerActive, setTimer] = useState(false);
  const [timerTime, setTimerTime] = useState({
    min: Number(defMin),
    sec: Number(defSec),
  });
  let newSec = timerTime.sec;
  let newMin = timerTime.min;

  const tick = () => {
    const timeAfterCreations = formatDistanceToNow(timeOfCreate, {includeSeconds: true,});
    setTime(timeAfterCreations);
  };

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 10);
    return () => {
      clearInterval(intervalID);
      clearInterval(timer);
    };
  }, [timer]);

  const switchTimer = (status) => {
    // eslint-disable-next-line no-unused-vars
    setTimer(status);
  };

  const timerUpdate = () => {
    if (newSec) newSec -= 1;
    if (newMin && !newSec) {
      newMin -= 1;
      newSec = 59;
    }
    // eslint-disable-next-line no-use-before-define
    if (!newMin && !newSec) stopTimer();
    return setTimerTime({ min: newMin, sec: newSec });
  };

  const startTimer = () => {
    switchTimer(true);
    setTimerUpdate(setInterval(timerUpdate, 1000));
  };

  const stopTimer = () => {
    switchTimer(false);
    clearInterval(timer);
  };

  const classTimer = () => {
    return timerActive ? "icon icon-pause" : "icon icon-play";
  };

  const onClickButtonHandler = (evt) => {
    const thisButton = evt.target.className;
    if (!done) {
      if (thisButton === "icon icon-play") startTimer();
      if (thisButton === "icon icon-pause") stopTimer();
    }
    if (thisButton === "toggle") {
      onChangeTaskStatus();
      stopTimer();
    }
    if (thisButton === "icon icon-edit") onEditValue();
    if (thisButton === "icon icon-destroy") onDelTask();
  };

  const { min, sec } = timerTime;

  return (
    <div
      role="presentation"
      className={className}
      onClick={onClickButtonHandler}
    >
      <input className="toggle" type="checkbox" />
      <label>
        <span className="title">{text}</span>
        <span className="description">
          {min || sec ? (
            <button type="button" className={classTimer()} />
          ) : null}
          {min || sec ? `${min} : ${sec}` : null}
        </span>
        <span className="created"> created {`${time}`} ago </span>
      </label>
      <button className="icon icon-edit" type="button" />
      <button className="icon icon-destroy" type="button" />
    </div>
  );
}

Task.defaultProps = {
  className: "view",
  onEditValue: () => {},
  onDelTask: () => {},
  min: 0,
  sec: 0,
};

Task.propTypes = {
  className: PropTypes.string,
  onEditValue: PropTypes.func,
  onDelTask: PropTypes.func,
  timeOfCreate: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onChangeTaskStatus: PropTypes.func.isRequired,
  min: PropTypes.string,
  sec: PropTypes.string,
  done: PropTypes.bool.isRequired,
};

export default Task;

// ss
// //
// export default class Task extends Component {
//   static defaultProps = {
//     className: 'view',
//     onEditValue: () => {},
//     onDelTask: () => {},
//     min: 0,
//     sec: 0,
//   };
//
//   static propTypes = {
//     className: PropTypes.string,
//     onEditValue: PropTypes.func,
//     onDelTask: PropTypes.func,
//     timeOfCreate: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     onChangeTaskStatus: PropTypes.func.isRequired,
//     min: PropTypes.string,
//     sec: PropTypes.string,
//     done: PropTypes.bool.isRequired,
//   };
//
//   state = {
//     time: formatDistanceToNow(this.props.timeOfCreate, { includeSeconds: true }),
//     timer: false,
//     min: Number(this.props.min),
//     sec: Number(this.props.sec),
//   };
//
//   tick = () => {
//     const { timeOfCreate } = this.props,
//       timeAfterCreations = formatDistanceToNow(timeOfCreate, { includeSeconds: true });
//     this.setState({ time: timeAfterCreations });
//   };
//
//   componentDidMount = () => {
//     this.intervalID = setInterval(() => this.tick(), 1000);
//   };
//
//   componentWillUnmount = () => {
//     clearInterval(this.intervalID);
//   };
//
//
//
//   switchTimer = (status) => {
//     this.setState({ timer: status });
//   }
//
//   timer = () => {
//     this.setState(({ min, sec, })=> {
//       if (sec) sec -= 1;
//       if(min && !sec){
//         min -= 1;
//         sec = 59;
//       }
//       if (!min && !sec) this.stopTimer()
//       return { min, sec}
//     })
//   }
//
//   startTimer = () => {
//     this.switchTimer(true)
//     this.testIntrval = setInterval(()=> this.timer(), 1000);
//   }
//
//   stopTimer = () => {
//     this.switchTimer(false)
//     clearInterval(this.testIntrval);
//   }
//
//
//   classTimer = () => {
//     const { timer } = this.state;
//     return timer ? 'icon icon-pause' : 'icon icon-play';
//   }
//
//   onClickButtonHandler = (evt) => {
//     const { onChangeTaskStatus, onEditValue, onDelTask, done } = this.props,
//       thisButton = evt.target.className;
//     if ( !done ) {
//       if(thisButton === 'icon icon-play') this.startTimer();
//       if(thisButton === 'icon icon-pause') this.stopTimer();
//     }
//     if(thisButton === 'toggle') {
//       onChangeTaskStatus()
//       this.stopTimer()
//     };
//     if(thisButton === 'icon icon-edit') onEditValue();
//     if(thisButton === 'icon icon-destroy') onDelTask();
//   }
//   render() {
//     const {
//         className,
//         text,
//       } = this.props,
//       { time, min, sec} = this.state;
//     return (
//       <div className={className} onClick={this.onClickButtonHandler}>
//         <input className="toggle" type="checkbox"/>
//         <label>
//           <span className="title" >{text}</span>
//           <span className="description">
//              {(min || sec) ? <button type="button" className={this.classTimer()}/> : null}
//             { (min || sec) ? `${min} : ${sec}`: null }
//             </span>
//           <span className="created"> created {`${time}`} ago </span>
//         </label>
//         <button className="icon icon-edit" type="button"/>
//         <button className="icon icon-destroy" type="button"/>
//       </div>
//     );
//   }
// }
