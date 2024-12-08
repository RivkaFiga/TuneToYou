import { Request, Response, NextFunction } from 'express';
import log4js from 'log4js';

log4js.configure({
  appenders: {
    console: { type: 'console' }, 
  },
  categories: {
    default: { appenders: ['console'], level: 'info' }, 
  },
});

const logger = log4js.getLogger();

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;
    logger.info(logMessage);
  });

  next();
};
