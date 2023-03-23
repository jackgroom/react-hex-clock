import { useState } from 'react';

import { TimeStruct } from './GlobalStateProvider';

interface Props {
  getCurrentTime: () => TimeStruct;
}

const Clock = ({ getCurrentTime }: Props) => {
  let currentTime: string = formatTime(getCurrentTime());
  const [time, setTime] = useState(currentTime);

  // TODO: get this to sync better with local system time
  setInterval(() => {
    setTime(formatTime(getCurrentTime()));
  }, 1000);

  return (
    <div className="Clock">
      <h1>{time}</h1>
    </div>
  );
};

const convertToHex = (numberToParse: number): string => {
  return (numberToParse >>> 0).toString(16);
};

const formatTime = (time: TimeStruct): string => {
  const formatNumber = (numberToFormat: number): string => {
    let current: string = numberToFormat.toString();
    if (numberToFormat < 10) {
      current = `0${current}`;
    }
    return current;
  };

  return `${formatNumber(time.hours)}:${formatNumber(
    time.minutes
  )}:${formatNumber(time.seconds)}`;
};

export default Clock;
