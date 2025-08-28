import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatRoom } from '../entities/chat-room.entity';

@Injectable()
export class ChatRoomService {
  constructor(
    @InjectRepository(ChatRoom)
    private readonly chatRoomRepository: Repository<ChatRoom>,
  ) {}

  findAll() {
    return this.chatRoomRepository.find();
  }

  findOne(id: number) {
    return this.chatRoomRepository.findOneBy({ id });
  }

  create(data: Partial<ChatRoom>) {
    const room = this.chatRoomRepository.create(data);
    return this.chatRoomRepository.save(room);
  }

  update(id: number, data: Partial<ChatRoom>) {
    return this.chatRoomRepository.update(id, data);
  }

  remove(id: number) {
    return this.chatRoomRepository.delete(id);
  }
}
