import * as winston from 'winston';
import { LoggerService } from '@nestjs/common';

export class Logger implements LoggerService {
  private static logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()]
  });

  public static verbose(message: string): void {
    this.logger.verbose(message);
  }

  public verbose(message: string): void {
    Logger.verbose(message);
  }

  public static debug(message: string): void {
    this.logger.debug(message);
  }

  public debug(message: string): void {
    Logger.debug(message);
  }

  public static info(message: string): void {
    this.logger.info(message);
  }

  public log(message: string): void {
    Logger.info(message);
  }

  public static warn(message: string): void {
    this.logger.warn(message);
  }

  public warn(message: string): void {
    Logger.warn(message);
  }

  public static error(message: string): void {
    this.logger.error(message);
  }

  public error(message: string, trace: string): void {
    Logger.error(`${message}\nTrace: ${trace}`);
  }
}
