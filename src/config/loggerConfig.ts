import { envConfig } from '@/config/env';

export const loggerConfig = {
  logLevel: envConfig.logLevel || 'info',
  logDir: './logs',
  maxFileSize: 5 * 1024 * 1024,
  consoleOutput: true,
};
