import { Server, type WebSocket } from 'ws';
import { Config } from './utils/config';
import { logger } from './utils/logger';

Config.setup();

const wss = new Server({ port: 8080 });

wss
  .on('connection', (ws: WebSocket) => {
    logger.info(`We are connected ${new Date().toISOString()}`);

    ws.on('message', (data) => {});

    ws.send('We are live');
  })
  .on('error', (error: Error) => {
    logger.error(`WSS Error: ${error.message}`);
  });

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toISOString());
  });
}, 1000);
