import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';

const useTask = (props) => {
  const { timeOfCreate, min: defMin, sec: defSec, onChangeTaskStatus, onEditValue, onDelTask, done } = props;

  const [time, setTime] = useState(formatDistanceToNow(timeOfCreate, { includeSeconds: true }));
  const [timer, setTimerUpdate] = useState(null);
  const [timerActive, setTimer] = useState(false);
  const [timerTime, setTimerTime] = useState({
    min: Number(defMin),
    sec: Number(defSec),
  });
  let newSec = timerTime.sec;
  let newMin = timerTime.min;

  const tick = () => {
    const timeAfterCreations = formatDistanceToNow(timeOfCreate, { includeSeconds: true });
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
    setTimer(status);
  };

  const stopTimer = () => {
    switchTimer(false);
    clearInterval(timer);
  };

  const timerUpdate = () => {
    if (newSec) newSec -= 1;
    if (newMin && !newSec) {
      newMin -= 1;
      newSec = 59;
    }
    if (!newMin && !newSec) stopTimer();
    return setTimerTime({ min: newMin, sec: newSec });
  };

  const startTimer = () => {
    switchTimer(true);
    setTimerUpdate(setInterval(timerUpdate, 1000));
  };

  const classTimer = () => {
    return timerActive ? 'icon icon-pause' : 'icon icon-play';
  };

  const onClickButtonHandler = (evt) => {
    const thisButton = evt.target.className;
    if (!done) {
      if (thisButton === 'icon icon-play') startTimer();
      if (thisButton === 'icon icon-pause') stopTimer();
    }
    if (thisButton === 'toggle') {
      onChangeTaskStatus();
      stopTimer();
    }
    if (thisButton === 'icon icon-edit') onEditValue();
    if (thisButton === 'icon icon-destroy') onDelTask();
  };

  const { min, sec } = timerTime;
  return { min, sec, time, classTimer, onClickButtonHandler };
};

export default useTask;
