import { TimeStamp, TimeStruct, DateStruct } from '../interfaces/TimeStamp';

const GetCurrentTimeStamp = (): TimeStamp => {
  let current: Date = new Date();

  let time: TimeStruct = {
    hours: current.getHours(),
    minutes: current.getMinutes(),
    seconds: current.getSeconds(),
  };

  let date: DateStruct = {
    day: current.getDate(),
    month: current.getMonth(),
    year: current.getFullYear(),

    dayOfWeek: current.getDay(),
    dayOfYear: getDayInYear(current),
  };

  return {
    time,
    date,
  };
};

// ! this is currently not giving accurate results
const getDayInYear = (current: Date): number => {
  let start: Date = new Date(current.getFullYear(), 0, 0);
  let difference: number =
    current.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - current.getTimezoneOffset()) * 60 * 1000;
  let currentDay: number = Math.floor(difference / (1000 * 60 * 60 * 24));

  return currentDay;
};

export default GetCurrentTimeStamp;
