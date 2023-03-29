import { useState } from 'react';
import { TimeStamp, TimeStruct, DateStruct } from '../interfaces/TimeStamp';

import './Clock.css';

interface Props {
  getCurrentTimeStamp: () => TimeStamp;
}

const Clock = ({ getCurrentTimeStamp }: Props) => {
  let currentTime: string = formatTime(getCurrentTimeStamp().time);
  const [time, setTime] = useState(currentTime);

  // TODO: get this to sync better with local system time
  setInterval(() => {
    let currentTime: TimeStruct = getCurrentTimeStamp().time;
    let formattedTime: string = formatTime(currentTime);

    document.body.style.backgroundColor = formattedTime;

    setTime(formattedTime);
  }, 1000);

  return (
    <div className="Clock">
      <h1>{time}</h1>
    </div>
  );
};

const formatTime = (time: TimeStruct): string => {
  const formatNumber = (numberToFormat: number): string => {
    let current: string = numberToFormat.toString();
    if (numberToFormat < 10) {
      current = `0${current}`;
    }
    return current;
  };

  return `#${formatNumber(time.hours)}${formatNumber(
    time.minutes
  )}${formatNumber(time.seconds)}`;
};

// deprecated / unused
const convertTimeToHex = (formattedTime: string): string => {
  let trimmed: string = formattedTime.replace(/#/g, '');
  let power: number = Number(trimmed) ** 2;
  let remainder: number = power % 1000000;

  return `#${remainder}`;
};

export default Clock;
