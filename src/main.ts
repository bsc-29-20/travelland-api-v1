import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './middleware/logger.middleware';
import helmet from 'helmet';


async function bootstrap() {

   // this will throw an error if there will be one
   const app = await NestFactory.create(AppModule, { abortOnError: false });

   app.use(logger);
   app.enableCors();
   app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Travelland')
    .setDescription('The Travelland API is  backend  for an online travel portal ')
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
