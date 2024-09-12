import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommonModule, DatabaseModule, MailService } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/common/Schema/User.schema';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './user/user.module';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';


@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
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
  controllers: [AuthController],
  providers: [AuthService, JwtService, MailService],
})
export class AuthModule {}
