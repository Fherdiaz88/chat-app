import { NestFactory } from '@nestjs/core';
import { ChatMicroserviceModule } from './chat-microservice/chat-microservice.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(ChatMicroserviceModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3010,
    },
  });

  await microservice.listen();
  console.log('🚀 Microservicio TCP listo en puerto 3010');
}

bootstrap();
