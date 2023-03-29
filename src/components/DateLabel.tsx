import { useState } from 'react';
import { TimeStamp, TimeStruct, DateStruct } from '../interfaces/TimeStamp';

import MessageArrayStore from '../resources/DateStrings';
import './DateLabel.css';

interface Props {
  getCurrentTimeStamp: () => TimeStamp;
}

const DateLabel = ({ getCurrentTimeStamp }: Props) => {
  let dateStruct: DateStruct = getCurrentTimeStamp().date;
  let formattedDate: string = formatDate(dateStruct);
  let [date, setDate] = useState(formattedDate);

  setInterval(() => {
    let currentDate: DateStruct = getCurrentTimeStamp().date;
    let formattedDate: string = formatDate(currentDate);

    setDate(formattedDate);
  }, 1000);

  return (
    <div className="DateLabel">
      <h3>{date}</h3>
    </div>
  );
};

const formatDate = (date: DateStruct): string => {
  let dayAsString: string = MessageArrayStore.days[date.dayOfWeek];
  let monthAsString: string = MessageArrayStore.months[date.month];
  let ordinalSuffix: string = getOrdinalSuffix(date.day);

  return `${dayAsString} ${date.day}${ordinalSuffix} ${monthAsString} ${date.year}`;
};

const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) {
    return 'th';
  }

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export default DateLabel;
