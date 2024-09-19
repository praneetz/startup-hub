import { Controller, Get } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';

@Controller()
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @Get()
  getHello(): string {
    return this.freelancerService.getHello();
  }
}
