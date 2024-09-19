import { Test, TestingModule } from '@nestjs/testing';
import { FreelancerController } from './freelancer.controller';
import { FreelancerService } from './freelancer.service';

describe('FreelancerController', () => {
  let freelancerController: FreelancerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FreelancerController],
      providers: [FreelancerService],
    }).compile();

    freelancerController = app.get<FreelancerController>(FreelancerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(freelancerController.getHello()).toBe('Hello World!');
    });
  });
});
