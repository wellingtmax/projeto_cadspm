import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatMessage } from '../entities/chat-message.entity';

@Injectable()
export class ChatMessageService {
  constructor(
    @InjectRepository(ChatMessage)
    private readonly chatMessageRepository: Repository<ChatMessage>,
  ) {}

  findAll() {
    return this.chatMessageRepository.find();
  }

  findOne(id: number) {
    return this.chatMessageRepository.findOneBy({ id });
  }

  create(data: Partial<ChatMessage>) {
    const message = this.chatMessageRepository.create(data);
    return this.chatMessageRepository.save(message);
  }

  update(id: number, data: Partial<ChatMessage>) {
    return this.chatMessageRepository.update(id, data);
  }

  remove(id: number) {
    return this.chatMessageRepository.delete(id);
  }
}
