import { Injectable } from '@nestjs/common';

@Injectable()
export class FreelancerService {
  getHello(): string {
    return 'Hello World!';
  }
}
