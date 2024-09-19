import { Module } from '@nestjs/common';
import { JobSeekerController } from './job-seeker.controller';
import { JobSeekerService } from './job-seeker.service';
import { CommonModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSeeker, JobSeekerSchema } from '@app/common/Schema/job-seeker.schema';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([{ name: JobSeeker.name, schema: JobSeekerSchema }]),
  ],
  controllers: [JobSeekerController],
  providers: [JobSeekerService],
})
export class JobSeekerModule {}
