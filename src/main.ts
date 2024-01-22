import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './enviroment';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bufferLogs: true,
  });
  app.setGlobalPrefix('api/v1');
  await app.listen(PORT);
  logger.log(`Application listening on port 🚗 ${PORT}`);
}
bootstrap();
