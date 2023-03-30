import { useState } from 'react';
import { TimeStamp, TimeStruct, DateStruct } from '../interfaces/TimeStamp';

import './Message.css';
import DateStrings from '../resources/DateStrings';
interface Props {
  getCurrentTimeStamp: () => TimeStamp;
}

const Message = ({ getCurrentTimeStamp }: Props) => {
  return (
    <div className="Message">
      <h3>is it fixed?</h3>
    </div>
  );
};

const convertHourToTimeString = (currentHour: number): string => {
  // preferred switch case for readability compared to if/else
  switch (true) {
    case currentHour >= 6 && currentHour < 12:
      return 'morning';
    case currentHour >= 12 && currentHour < 17:
      return 'afternoon';
    case currentHour >= 17 && currentHour < 24:
      return 'evening';
    case currentHour >= 0 && currentHour < 6:
      return 'night';
    default:
      return 'default';
  }
};

export default Message;
