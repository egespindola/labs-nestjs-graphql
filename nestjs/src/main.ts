import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('lo_wsl')

  await app.listen(process.env.APP_PORT);

  console.info(`\nServer running on port ${process.env.APP_PORT}`)
}
bootstrap();
