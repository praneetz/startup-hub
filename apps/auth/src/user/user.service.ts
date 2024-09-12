import { User } from '@app/common/Schema/User.schema';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getMyProfile(request: any) {
    const userData = await this.userModel.findById(request.user.id);
    return { data: userData };
  }

  async updateProfile(updateUserDto: UpdateUserDto, request: any) {
    const userFound = await this.userModel.findById(request.user.id);
    if (!userFound) {
      throw new BadRequestException('Invalid user');
    }

    // update user
    await this.userModel.findByIdAndUpdate(request.user.id, updateUserDto);
    return 'User updated successfully';
  }
}
