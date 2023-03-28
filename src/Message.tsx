import { useState } from 'react';
import { TimeStruct } from './GlobalStateProvider';

interface Props {
  getCurrentTime: () => TimeStruct;
}

const Message = ({ getCurrentTime }: Props) => {
  return (
    <div className="Message">
      <p>This is a test</p>
    </div>
  );
};

export default Message;
