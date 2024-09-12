import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/common/Schema/User.schema';
import { JwtService } from '@nestjs/jwt';
import { UploadService } from '@app/common/Upload/upload.service';

@Module({
  controllers: [UserController],
  providers: [UserService, JwtService, UploadService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UserModule {}
