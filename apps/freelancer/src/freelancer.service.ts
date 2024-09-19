import { Injectable } from '@nestjs/common';
import { UpdateFreelancerDto } from './dto/update-freelancer.dto';
import { BookServiceDto } from './dto/book-service.dto';
import axios from 'axios';

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

  accessDashboard() {
    return {
      message: 'Welcome to your dashboard',
      stats: {
        totalProjects: 12,
        activeClients: 4,
        revenue: '$5000',
      },
    };
  }

  async accessMarketNews() {
    const rssUrl = 'https://rss.cnn.com/rss/money_latest.rss';

    try {
      const response = await axios.get(rssUrl);
      return {
        message: 'Market news retrieved successfully',
        data: response.data,
      };
    } catch (error) {
      return {
        message: 'Error retrieving market news',
        error: error.message,
      };
    }
  }


  getMatchingRoles() {
    const roles = [
      { title: 'Full Stack Developer', company: 'Tech Corp', matchScore: 95 },
      { title: 'Backend Engineer', company: 'InnoWorks', matchScore: 88 },
    ];
    return {
      message: 'Matching roles retrieved successfully',
      roles,
    };
  }


  getAnalytics() {
    return {
      message: 'Freelancer analytics retrieved successfully',
      analytics: {
        totalProjectsCompleted: 15,
        averageRating: 4.8,
        totalEarnings: '$12,000',
        clientSatisfaction: '98%',
      },
    };
  }

  getAutomatedBookings() {
    return {
      message: 'Automated bookings and contracts retrieved successfully',
      bookings: [
        {
          client: 'Company A',
          project: 'Mobile App Development',
          status: 'Pending Payment (Escrow)',
          contractDetails: 'Escrow account created, awaiting client deposit.',
        },
        {
          client: 'Company B',
          project: 'Website Redesign',
          status: 'Active',
          contractDetails: 'Milestone 1 payment completed, in progress.',
        },
      ],
    };
  }

  getHello(): string {
    return 'Hello World!';
  }
}
