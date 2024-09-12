import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [
    DatabaseModule,
    ConfigModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.HOST,
        secure: false,
        port: process.env.PORT,
        auth: {
          user: process.env.MailUsername,
          pass: process.env.MailPassword,
        },
      },
    }),
  ],
})
export class CommonModule {}
