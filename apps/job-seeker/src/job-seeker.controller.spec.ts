import { Test, TestingModule } from '@nestjs/testing';
import { JobSeekerController } from './job-seeker.controller';
import { JobSeekerService } from './job-seeker.service';

describe('JobSeekerController', () => {
  let jobSeekerController: JobSeekerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JobSeekerController],
      providers: [JobSeekerService],
    }).compile();

    jobSeekerController = app.get<JobSeekerController>(JobSeekerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(jobSeekerController.getHello()).toBe('Hello World!');
    });
  });
});
