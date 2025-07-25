import { Module } from '@nestjs/common';
import { ChatMicroserviceService } from './chat-microservice.service';

@Module({
  providers: [ChatMicroserviceService],
})
export class ChatMicroserviceModule {}
