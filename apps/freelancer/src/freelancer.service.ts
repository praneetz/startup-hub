import { Injectable } from '@nestjs/common';
import { UpdateFreelancerDto } from './dto/update-freelancer.dto';
import { BookServiceDto } from './dto/book-service.dto';

@Injectable()
export class FreelancerService {
  getDashboard() {
    return {
      projectsCompleted: 15,
      ongoingProjects: 3,
      hoursWorked: 120,
      rating: 4.8,
      totalEarnings: '$5000',
    };
  }

  getProfileData() {
    return {
      name: 'John Doe',
      email: 'john.doe@example.com',
      skills: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
      experience: '5 years',
      location: 'New York, USA',
    };
  }

  editDetails(updateFreelancerDto: UpdateFreelancerDto) {
    return {
      message: 'Freelancer details updated successfully',
      updatedData: updateFreelancerDto,
    };
  }

  offerService(bookServiceDto: BookServiceDto) {
    return {
      message: 'Service successfully booked/inquired/messaged',
      serviceDetails: bookServiceDto,
      calendarLink: 'https://calendar.com/booking/1234',
    };
  }

  matchSpecialties(specialty: string) {
    const matchedResults = [
      {
        name: 'John Doe',
        specialty: 'Web Development',
        rating: 4.8,
      },
      {
        name: 'Jane Smith',
        specialty: 'Project Management',
        rating: 4.7,
      },
    ];

    const matches = matchedResults.filter((result) =>
      result.specialty.toLowerCase().includes(specialty.toLowerCase()),
    );

    return matches.length > 0
      ? matches
      : { message: 'No matching results found for this specialty' };
  }
  getHello(): string {
    return 'Hello World!';
  }
}
