import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatParticipant } from '../entities/chat-participant.entity';

@Injectable()
export class ChatParticipantService {
  constructor(
    @InjectRepository(ChatParticipant)
    private readonly chatParticipantRepository: Repository<ChatParticipant>,
  ) {}

  findAll() {
    return this.chatParticipantRepository.find();
  }

  findOne(id: number) {
    return this.chatParticipantRepository.findOneBy({ id });
  }

  create(data: Partial<ChatParticipant>) {
    const participant = this.chatParticipantRepository.create(data);
    return this.chatParticipantRepository.save(participant);
  }

  update(id: number, data: Partial<ChatParticipant>) {
    return this.chatParticipantRepository.update(id, data);
  }

  remove(id: number) {
    return this.chatParticipantRepository.delete(id);
  }
}
