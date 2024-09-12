import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommonModule, DatabaseModule, MailService } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/common/Schema/User.schema';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, MailService],
})
export class AuthModule {}
