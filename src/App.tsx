import React from 'react';
import Clock from './Clock';
import Message from './Message';

import { TimeStruct } from './GlobalStateProvider';

function App() {
  // created this in main app component since it will be needed by both clock and message components
  const getCurrentTime = (): TimeStruct => {
    let current: Date = new Date();
    let hours: number = current.getHours();
    let minutes: number = current.getMinutes();
    let seconds: number = current.getSeconds();

    return { hours, minutes, seconds };
  };

  return (
    <div className="App">
      <Clock getCurrentTime={getCurrentTime} />
      <Message getCurrentTime={getCurrentTime} />
    </div>
  );
}

export default App;
