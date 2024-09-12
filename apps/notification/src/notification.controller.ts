import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { MailService } from '@app/common';
import { SendMailDto } from './dto/sendMail.dto';

@Controller()
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private mailService: MailService,
  ) {}

  @RabbitSubscribe({
    exchange: 'verificationMailExchange',
    routingKey: 'verification',
    queue: 'verificationMailQueue',
  })
  sendVerificationMail(payload: SendMailDto): void {
    console.log(process.env.MailUsername)
    this.mailService.sendMail(payload);
    console.log('mail sent');
  }
}
