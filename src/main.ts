import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './utils/logger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger()
  });
  app.useGlobalPipes(new ValidationPipe());
  const port = 3000;
  await app.listen(port);
  Logger.info(`Starting users-api on port ${port}`);
}
bootstrap();
