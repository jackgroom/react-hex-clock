import React from 'react';
import Clock from './components/Clock';
import Message from './components/Message';
import DateLabel from './components/DateLabel';

import { TimeStamp, TimeStruct, DateStruct } from './interfaces/TimeStamp';

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
      <Message getCurrentTimeStamp={getCurrentTimeStamp} />
      <DateLabel getCurrentTimeStamp={getCurrentTimeStamp} />
    </div>
  );
}

export default App;
