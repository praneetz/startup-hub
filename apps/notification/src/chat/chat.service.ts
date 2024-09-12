import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/createMessage.dto';
import { Model } from 'mongoose';
import { User } from '@app/common/Schema/User.schema';
import { Messages } from '@app/common/Schema/Message.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Messages.name) private messageModel: Model<Messages>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async saveMessage(createMessageDto: CreateMessageDto): Promise<string> {
    await this.messageModel.create(createMessageDto);
    return 'Message saved';
  }

  async updateSocketIdOfUser(userAndSocketIdDto: {
    userId: string;
    socketId: string;
  }) {
    await this.userModel.findByIdAndUpdate(userAndSocketIdDto.userId, {
      socketId: userAndSocketIdDto.socketId,
    });
    return 'User socketId is updated';
  }

  async findUserById(id: any) {
    const user = await this.userModel.findById(id);
    return user.socketId;
  }
}
