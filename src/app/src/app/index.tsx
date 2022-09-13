import React from 'react';
import { ClockControl } from './components/clock-control';

const App: React.FC = () => {
  return (
    <main className="main">
      <ClockControl clockTitle="React Websocket Clock thing" />
    </main>
  );
};

export default App;
