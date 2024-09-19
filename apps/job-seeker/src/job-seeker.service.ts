import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@app/common/Schema/User.schema';
import { MailService } from '@app/common';
import { JobSeeker } from '@app/common/Schema/job-seeker.schema';

@Injectable()
export class JobSeekerService {
  constructor(
    @InjectModel(JobSeeker.name) private companyModel: Model<JobSeeker>,
    private mailService: MailService,
  ) { }

  boostProfileMatching(): string {
    const matchedJobs = [
      { title: 'Senior Software Engineer', company: 'TechCorp', matchPercentage: 95 },
      { title: 'Full-Stack Developer', company: 'Innovatech', matchPercentage: 89 },
      { title: 'Backend Developer', company: 'DevSolutions', matchPercentage: 85 },
    ];

    return `Boosted profile matching: ${JSON.stringify(matchedJobs)}`;
  }

  getSocialAccessWall(): string {
    const socialWallPosts = [
      { user: 'Jane Doe', post: 'Excited to announce my new job at TechCorp!', date: '2024-09-15' },
      { user: 'John Smith', post: 'Looking for a full-stack developer to join our team!', date: '2024-09-14' },
      { user: 'Alice Green', post: 'Sharing some tips on passing technical interviews.', date: '2024-09-13' },
    ];

    return `Social wall access: ${JSON.stringify(socialWallPosts)}`;
  }

  sendEmailAlerts(): string {
    const matchedRoles = [
      { title: 'Frontend Developer', company: 'TechCorp' },
      { title: 'Backend Developer', company: 'InnoTech' }
    ];
    const emailContent = `Matched roles: ${JSON.stringify(matchedRoles)}. Email alerts have been sent.`;
    return emailContent;
  }

  connectSocialAccounts(): string {
    const connectedAccounts = {
      linkedin: true,
      twitter: true,
      github: false,
    };
    return `Social accounts connected: ${JSON.stringify(connectedAccounts)}`;
  }

  getUserAnalytics(): string {
    const analytics = {
      pageViews: 500,
      avgSessionDuration: '3m 20s',
      bounceRate: '40%',
      topPages: ['/dashboard', '/jobs', '/profile'],
    };
    return `User Analytics: ${JSON.stringify(analytics)}`;
  }
  dataRetrieval(): string {
    const linkedinData = {
      name: 'John Doe',
      headline: 'Full-Stack Developer at TechCorp',
      skills: ['JavaScript', 'Node.js', 'React'],
      experience: [
        { company: 'TechCorp', position: 'Full-Stack Developer', years: 3 },
        { company: 'InnoTech', position: 'Backend Developer', years: 2 },
      ],
    };
    return `LinkedIn Data Retrieved: ${JSON.stringify(linkedinData)}`;
  }

  uploadData(): string {
    return 'CV uploaded successfully!';
  }

  // View membership, payments, history, invoice, payment renewals/reminders
  getDetails(): string {
    const membershipDetails = {
      membership: 'Premium',
      payments: [
        { amount: 50, date: '2024-08-01', invoice: 'INV123456' },
        { amount: 50, date: '2024-09-01', invoice: 'INV654321' },
      ],
      renewals: { nextPaymentDue: '2024-10-01', reminderSent: true },
    };
    return `Membership and Payment Details: ${JSON.stringify(membershipDetails)}`;
  }

  getMyMeetings(): string {
    const meetings = [
      {
        meetingId: '12345',
        topic: 'Job Interview with TechCorp',
        date: '2024-09-20',
        time: '10:00 AM',
        status: 'Scheduled',
      },
      {
        meetingId: '67890',
        topic: 'Project Discussion with InnoTech',
        date: '2024-09-22',
        time: '2:00 PM',
        status: 'Completed',
      },
    ];
    return `Your meetings: ${JSON.stringify(meetings)}`;
  }

  getProfileViews(): string {
    const profileViews = 15;
    return `Your profile has been viewed ${profileViews} times.`;
  }

  getVaccancies(): string {
    const vacancies = [
      { title: 'Software Engineer', company: 'TechCorp', location: 'Remote' },
      { title: 'Backend Developer', company: 'InnoTech', location: 'New York' },
    ];
    return `Available vacancies: ${JSON.stringify(vacancies)}`;
  }

  getDashboard(): string {
    const dashboardData = {
      accountType: 'Free',
      jobApplications: 5,
      savedJobs: 10,
    };
    return `Dashboard data: ${JSON.stringify(dashboardData)}`;
  }

  getDashboxes(): string {
    const dashboxes = {
      unreadMessages: 3,
      jobRecommendations: 2,
      upcomingInterviews: 1,
    };
    return `Dashboxes: ${JSON.stringify(dashboxes)}`;
  }

  publishMyAccount(): string {
    return 'Your account has been successfully published.';
  }

  addMyDetails(): string {
    return 'Your details have been successfully added.';
  }

  getStartupServices(): string {
    const services = [
      { name: 'Resume Review', status: 'Available' },
      { name: 'Mock Interviews', status: 'Coming Soon' },
    ];
    return `Startup services: ${JSON.stringify(services)}`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
