import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

   // this will throw an error if there will be one
   const app = await NestFactory.create(AppModule, { abortOnError: false });

  const config = new DocumentBuilder()
    .setTitle('Travelland')
    .setDescription('The travelland API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

 
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
