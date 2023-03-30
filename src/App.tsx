import React from 'react';
import Clock from './components/Clock';
import Message from './components/Message';
import DateLabel from './components/DateLabel';

import { useCallback } from 'react';

import './App.css';

import { TimeStamp, TimeStruct, DateStruct } from './interfaces/TimeStamp';

function App() {
  return (
    <div className="App">
      <Clock />
      <Message />
      <DateLabel />
    </div>
  );
}

export default App;
