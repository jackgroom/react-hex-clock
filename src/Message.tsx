import { useState } from 'react';
import { TimeStamp, TimeStruct, DateStruct } from './GlobalStateProvider';

import MessageArrayStore from './MessageArrayStore';
interface Props {
  getCurrentTimeStamp: () => TimeStamp;
}

const Message = ({ getCurrentTimeStamp }: Props) => {
  return (
    <div className="Message">
      <p></p>
    </div>
  );
};

export default Message;
