import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

   // this will throw an error if there will be one
   const app = await NestFactory.create(AppModule, { abortOnError: false });

  const config = new DocumentBuilder()
    .setTitle('Travelland')
    .setDescription('The Travelland API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('reviews')
    .addTag('auth')
    .addTag('flights')
    .addTag('hotels')
    .addTag('carRentals')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      })
    );
  
  await app.listen(5555);
}
bootstrap();
