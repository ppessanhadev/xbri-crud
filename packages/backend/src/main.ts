import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { patchNestJsSwagger } from 'nestjs-zod';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger, VersioningType } from '@nestjs/common';
import { ApplicationModule } from '@/modules/application.module';

const swaggerConfig = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('XBRI Crud')
    .setDescription('An API to manage items')
    .setVersion('1.0.0')
    .build();

  patchNestJsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};

const appConfig = (app: INestApplication) => {
  app
    .enableVersioning({ type: VersioningType.URI, defaultVersion: '1' })
    .setGlobalPrefix('api')
    .use(helmet())
    .enableCors({ origin: process.env.REQUEST_ORIGIN || '*' });
};

const initialize = async () => {
  const port = process.env.PORT || '3000';
  const isDev = process.env.NODE_ENV === 'development';
  const app = await NestFactory.create(ApplicationModule);

  appConfig(app);
  swaggerConfig(app);

  await app.listen(port);
  Logger.log(`Server is running on port ${port}`, 'API');

  if (isDev) Logger.warn(`http://localhost:${port}/api/docs`, 'DOCS');
};

initialize();
