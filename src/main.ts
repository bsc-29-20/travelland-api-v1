import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './middleware/logger.middleware';


async function bootstrap() {

   // this will throw an error if there will be one
   const app = await NestFactory.create(AppModule, { abortOnError: false });

   app.use(logger);

  const config = new DocumentBuilder()
    .setTitle('Travelland')
    .setDescription('Travelland travel portal')
    .setVersion('1.0')
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
