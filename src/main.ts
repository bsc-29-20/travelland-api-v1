import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  // this will throw an error if there will be one
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      })
    );
  
  //setting a global prefix
  app.setGlobalPrefix('api');
  await app.listen(5555);
}
bootstrap();
