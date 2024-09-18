import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from '@app/common/Interceptor/res.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  const config = new DocumentBuilder()
    .setTitle('Auth example')
    .setDescription('The auth API description')
    .setVersion('1.0')
    .addBearerAuth()
    // .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('auth/api', app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  console.log(
    `\x1b[Auth microservice is running at ${process.env.AuthMicroservicePort} \x1b[0m`,
  );
  await app.listen(process.env.AuthMicroservicePort);
}
bootstrap();
