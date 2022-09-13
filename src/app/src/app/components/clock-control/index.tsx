import React, { useEffect, useState } from 'react';

export const ClockControl: React.FC<ClockControlProps> = (props) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const webSocket = new WebSocket(
      process.env.REACT_APP_WEBSOCKET_CONN as string,
    );

    webSocket.onmessage = (event) => {
      setDate(new Date(event.data));
    };
  }, []);

  return (
    <>
      <h1>{props.clockTitle}</h1>
      <h2>{`${date.toLocaleDateString()} | ${date.toLocaleTimeString()}`}</h2>
    </>
  );
};
