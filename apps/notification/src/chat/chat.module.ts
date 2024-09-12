import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Messages, MessageSchema } from '@app/common/Schema/Message.schema';
import { User, UserSchema } from '@app/common/Schema/User.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Messages.name, schema: MessageSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
