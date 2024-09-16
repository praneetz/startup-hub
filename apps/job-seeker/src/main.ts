import { NestFactory } from '@nestjs/core';
import { JobSeekerModule } from './job-seeker.module';

async function bootstrap() {
  const app = await NestFactory.create(JobSeekerModule);
  await app.listen(3000);
}
bootstrap();
