import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { CommonModule, MailService } from '@app/common';

@Module({
  imports: [
    CommonModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'mailExchange',
          type: 'direct',
        },
        {
          name: 'verificationMailExchange',
          type: 'direct',
        },
      ],
      uri: process.env.RabbitMQ_URL,
      enableControllerDiscovery: true,
      channels: {
        'channel-1': {
          prefetchCount: 15,
          default: true,
        },
        'channel-2': {
          prefetchCount: 2,
        },
      },
    }),
  ],
  controllers: [NotificationController],
  providers: [NotificationService, MailService],
})
export class NotificationModule {}
