import { useState, useEffect, useRef } from 'react';
import { TimeStamp, TimeStruct, DateStruct } from '../interfaces/TimeStamp';
import { MessageType } from '../enums/MessageType';
import getCurrentTimeStamp from '../util/GetCurrentTimeStamp';

import './Message.css';

import getMessageString from '../util/MessageStringHandler';
interface Props {}

const Message = ({}: Props) => {
  let [message, setMessage] = useState('');

  useEffect(() => {
    setInterval(() => {
      let currentTimeStamp: TimeStamp = getCurrentTimeStamp();
      let randomMessageType: MessageType = getRandomMessageType(
        currentTimeStamp.time.hours
      );
      let randomMessage: string = getMessageString(randomMessageType);
      setMessage(randomMessage);
    }, 5000);
  }, [setMessage]);

  return (
    <div className="Message">
      <h3>{message}</h3>
    </div>
  );
};

const getRandomMessageType = (currentHour: number): MessageType => {
  // return convertHourToTimeString(currentHour);
  let coinflip: number = Math.random();
  return coinflip >= 0.5
    ? convertHourToTimeString(currentHour)
    : MessageType.default;
};

const convertHourToTimeString = (currentHour: number): MessageType => {
  // preferred switch case for readability compared to if/else
  switch (true) {
    case currentHour >= 6 && currentHour < 12:
      return MessageType.morning;
    case currentHour >= 12 && currentHour < 17:
      return MessageType.afternoon;
    case currentHour >= 17 && currentHour < 24:
      return MessageType.evening;
    case currentHour >= 0 && currentHour < 6:
      return MessageType.night;
    default:
      return MessageType.default;
  }
};

export default Message;
