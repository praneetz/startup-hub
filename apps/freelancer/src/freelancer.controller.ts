import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { UpdateFreelancerDto } from './dto/update-freelancer.dto';
import { BookServiceDto } from './dto/book-service.dto';

@Controller('freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) { }
  
  @Get('dashboard')
  getDashboard() {
    return this.freelancerService.getDashboard();
  }

  @Get('profile')
  getProfileData() {
    return this.freelancerService.getProfileData();
  }

  @Put('edit-details')
  editDetails(@Body() updateFreelancerDto: UpdateFreelancerDto) {
    return this.freelancerService.editDetails(updateFreelancerDto);
  }
  
  @Post('offer-service')
  offerService(@Body() bookServiceDto: BookServiceDto) {
    return this.freelancerService.offerService(bookServiceDto);
  }

  @Get('match')
  matchSpecialties(@Query('specialty') specialty: string) {
    return this.freelancerService.matchSpecialties(specialty);
  }

  @Get()
  getHello(): string {
    return this.freelancerService.getHello();
  }
}
