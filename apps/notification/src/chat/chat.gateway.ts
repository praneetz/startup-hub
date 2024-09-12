import { ChatService } from './chat.service';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateMessageDto } from './dto/createMessage.dto';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', async (socket) => {
      // update socketId of user
      this.chatService.updateSocketIdOfUser({
        userId: `${socket.handshake.query.userId}`,
        socketId: `${socket.id}`,
      });

      console.log(
        'New user connected=>',
        socket.id,
        socket.handshake.query.userId,
      );
      socket.on('disconnect', async () => {
        // update socketId of user
        this.chatService.updateSocketIdOfUser({
          userId: `${socket.handshake.query.userId}`,
          socketId: ``,
        });
        console.log('user disconnected=>', socket.id);
      });
    });
  }

  @SubscribeMessage('msgToServer')
  async msgToServer(@MessageBody() payload: CreateMessageDto) {
    // save the message in the db
    this.chatService.saveMessage(payload);
    // fetch the socketId from userId
    const socketId = await this.chatService.findUserById(payload.to);
    // send message to the user
    this.server.to(socketId).emit('msgToClient', {
      message: payload.message,
    });
  }
}
