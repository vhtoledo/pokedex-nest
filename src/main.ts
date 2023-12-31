import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configuracion de prefijo
  app.setGlobalPrefix('api/v2');

  // Configuracion global de pipes
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
    })
   );

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`)
}
bootstrap();
