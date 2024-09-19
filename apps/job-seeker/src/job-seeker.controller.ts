import { Controller, Get, Post, Put } from '@nestjs/common';
import { JobSeekerService } from './job-seeker.service';

@Controller('job-seeker')
export class JobSeekerController {
  constructor(private readonly jobSeekerService: JobSeekerService) { }
  @Get('startup/services')
  getStartupServices(): string {
    return this.jobSeekerService.getStartupServices();
  }
  @Post('add/details')
  addMyDetails(): string {
    return this.jobSeekerService.addMyDetails();
  }
  @Put('publish/account')
  publishMyAccount(): string {
    return this.jobSeekerService.publishMyAccount();
  }
  @Get('dashboxes')
  getDashboxes(): string {
    return this.jobSeekerService.getDashboxes();
  }
  //Free account 
  @Get('dashboard')
  getDashboard(): string {
    return this.jobSeekerService.getDashboard();
  }
  @Get('vaccancies')
  getVaccancies(): string {
    return this.jobSeekerService.getVaccancies();
  }
  @Get('profile/views')
  getProfileViews(): string {
    return this.jobSeekerService.getProfileViews();
  }
  @Get('meetings')
  getMyMeetings(): string {
    return this.jobSeekerService.getMyMeetings();
  }
  //Paid account 
  @Get('retrieve/data')
  dataRetrieval(): string {
    return this.jobSeekerService.dataRetrieval();
  }

  @Put('upload/cv')
  uploadData(): string {
    return this.jobSeekerService.uploadData();
  }

  @Get('details')
  getDetails(): string {
    return this.jobSeekerService.getDetails();
  }

  @Post('email-alerts/matched-roles')
  sendEmailAlerts(): string {
    return this.jobSeekerService.sendEmailAlerts();
  }

  @Put('connect/socials')
  connectSocialAccounts(): string {
    return this.jobSeekerService.connectSocialAccounts();
  }

  @Get('analytics/user-stats')
  getUserAnalytics(): string {
    return this.jobSeekerService.getUserAnalytics();
  }

  @Post('boost/profile-matched')
  boostProfileMatching(): string {
    return this.jobSeekerService.boostProfileMatching();
  }

  @Get('socials/access-wall')
  getSocialAccessWall(): string {
    return this.jobSeekerService.getSocialAccessWall();
  }
  
  @Get()
  getHello(): string {
    console.log("inside job seeker")
    return this.jobSeekerService.getHello();
  }
}
