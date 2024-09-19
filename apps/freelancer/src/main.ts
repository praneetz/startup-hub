import { NestFactory } from '@nestjs/core';
import { FreelancerModule } from './freelancer.module';

async function bootstrap() {
  const app = await NestFactory.create(FreelancerModule);
  await app.listen(3000);
}
bootstrap();
