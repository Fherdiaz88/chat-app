import { OnModuleInit } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

import { Server } from 'socket.io';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

// Resto del código...


@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  private client: ClientProxy;

  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3010,
      },
    });
  }

  @SubscribeMessage('chatMessage')
  async handleMessage(@MessageBody() data: { user: string; message: string }) {
    const response = await this.client.send('chat_message', data).toPromise();
    this.server.emit('chatMessage', data);
    return response;
  }
}
