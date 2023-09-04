import { NestFactory } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configuracion de prefijo
  app.setGlobalPrefix('api/v2');

  // referencia a nuestra bd
  MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

  await app.listen(3001);
}
bootstrap();
