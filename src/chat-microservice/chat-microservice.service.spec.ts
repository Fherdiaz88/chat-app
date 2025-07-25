import { Test, TestingModule } from '@nestjs/testing';
import { ChatMicroserviceService } from './chat-microservice.service';

describe('ChatMicroserviceService', () => {
  let service: ChatMicroserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatMicroserviceService],
    }).compile();

    service = module.get<ChatMicroserviceService>(ChatMicroserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
