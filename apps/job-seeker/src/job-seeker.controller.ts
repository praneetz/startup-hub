import { Controller, Get, Post, Put } from '@nestjs/common';
import { JobSeekerService } from './job-seeker.service';

@Controller('job-seeker')
export class JobSeekerController {
  constructor(private readonly jobSeekerService: JobSeekerService) { }
  @Get('startup-services')
  getStartupServices(): string {
    return this.jobSeekerService.getStartupServices();
  }
  @Post('add-details')
  addMyDetails(): string {
    return this.jobSeekerService.addMyDetails();
  }
  @Put('publish-account')
  publishMyAccount(): string {
    return this.jobSeekerService.publishMyAccount();
  }
  @Get('dashboxes')
  getDashboxes(): string {
    return this.jobSeekerService.getDashboxes();
  }
  @Get()
  getHello(): string {
    return this.jobSeekerService.getHello();
  }
}
