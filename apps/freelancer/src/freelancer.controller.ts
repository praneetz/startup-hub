import { Body, Controller, Get, Post, Put, Query, UseGuards } from '@nestjs/common';
import { FreelancerService } from './freelancer.service';
import { UpdateFreelancerDto } from './dto/update-freelancer.dto';
import { BookServiceDto } from './dto/book-service.dto';
import { SubscriptionGuard } from '@app/common/Guards/subscription.guard';

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

  // Paid feature 
  @Get('dashboard')
  @UseGuards(SubscriptionGuard)
  accessDashboard() {
    return this.freelancerService.accessDashboard();
  }

  @Get('market-news')
  @UseGuards(SubscriptionGuard)
  accessMarketNews() {
    return this.freelancerService.accessMarketNews();
  }

  @Get('matching-roles')
  @UseGuards(SubscriptionGuard)
  getMatchingRoles() {
    return this.freelancerService.getMatchingRoles();
  }

  @Get('analytics')
  @UseGuards(SubscriptionGuard)
  getAnalytics() {
    return this.freelancerService.getAnalytics();
  }

  @Get('automation/bookings')
  @UseGuards(SubscriptionGuard)
  getAutomatedBookings() {
    return this.freelancerService.getAutomatedBookings();
  }

  @Get()
  getHello(): string {
    return this.freelancerService.getHello();
  }
}
