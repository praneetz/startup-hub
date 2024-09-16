import { Injectable } from '@nestjs/common';

@Injectable()
export class JobSeekerService {
  getDashboxes(): string {
    throw new Error('Method not implemented.');
  }
  publishMyAccount(): string {
    throw new Error('Method not implemented.');
  }
  addMyDetails(): string {
    throw new Error('Method not implemented.');
  }
  getStartupServices(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
