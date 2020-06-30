import * as winston from 'winston';

export class Logger {
  private static logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()]
  });

  public static debug(message: string): void {
    this.logger.debug(message);
  }

  public static info(message: string): void {
    this.logger.info(message);
  }

  public static warn(message: string): void {
    this.logger.warn(message);
  }

  public static error(message: string): void {
    this.logger.error(message);
  }
}
