import { Server } from 'ws';

const wss = new Server({ host: '127.0.0.1', port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('We are live');
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toISOString());
  });
}, 1000);
