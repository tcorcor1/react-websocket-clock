import { createLogger, format, transports } from 'winston';

const loggingLevels = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7,
};

export const logger = createLogger({
  level: 'info',
  levels: loggingLevels,
  format: format.json(),
  defaultMeta: { service: 'client-svc' },
  transports: [new transports.Console()],
});
