import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ChatGateway } from '../chat/chat.gateway';

@Injectable()
export class ChatMicroserviceService {
  constructor(private readonly chatGateway: ChatGateway) {}

  @MessagePattern('chat_message')
  handleChatMessage(data: { user: string; message: string }) {
    console.log(`[Microservice] ${data.user}: ${data.message}`);

    this.chatGateway.server.emit('chatMessage', {
      senderId: data.user,
      message: data.message,
    });

    // IMPORTANTE: devuelve algo para que el client.send() no quede sin respuesta
    return { status: 'sent' };
  }
}
