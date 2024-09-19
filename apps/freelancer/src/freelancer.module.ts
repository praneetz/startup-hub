import { Module } from '@nestjs/common';
import { FreelancerController } from './freelancer.controller';
import { FreelancerService } from './freelancer.service';

@Module({
  imports: [],
  controllers: [FreelancerController],
  providers: [FreelancerService],
})
export class FreelancerModule {}
