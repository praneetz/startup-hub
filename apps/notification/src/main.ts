import { NestFactory } from '@nestjs/core';
import { NotificationModule } from './notification.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from '@app/common/Interceptor/res.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(NotificationModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  const config = new DocumentBuilder()
    .setTitle('Notification example')
    .setDescription('The Notification API description')
    .setVersion('1.0')
    .addBearerAuth()
    // .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('notification/api', app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  console.log(
    `\x1b[notification microservice is running at ${process.env.NotificationMicroservicePort} \x1b[0m`,
  );
  await app.listen(process.env.NotificationMicroservicePort);
}
bootstrap();
