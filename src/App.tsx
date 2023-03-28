import React from 'react';
import Clock from './Clock';
import Message from './Message';
import DateLabel from './DateLabel';

import { TimeStamp, TimeStruct, DateStruct } from './GlobalStateProvider';

function App() {
  // created this in main app component since it will be needed by both clock and message components
  const getCurrentTimeStamp = (): TimeStamp => {
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
    };

    return {
      time,
      date,
    };
  };

  return (
    <div className="App">
      <Clock getCurrentTimeStamp={getCurrentTimeStamp} />
      {/* <Message getCurrentTimeStamp={getCurrentTimeStamp} /> */}
      <DateLabel getCurrentTimeStamp={getCurrentTimeStamp} />
    </div>
  );
}

export default App;
