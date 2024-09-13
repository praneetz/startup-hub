import { NestFactory } from '@nestjs/core';
import { CompanyModule } from './company.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CompanyModule);
  const config = new DocumentBuilder()
    .setTitle('Company example')
    .setDescription('The company API description')
    .setVersion('1.0')
    .addBearerAuth()
    // .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('company/api', app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  console.log(
    `\x1b[company microservice is running at ${process.env.CompanyMicroservicePort} \x1b[0m`,
  );
  await app.listen(process.env.CompanyMicroservicePort);
}
bootstrap();
