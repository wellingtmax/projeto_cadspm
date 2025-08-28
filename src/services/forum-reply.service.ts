import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForumReply } from '../entities/forum-reply.entity';

@Injectable()
export class ForumReplyService {
  constructor(
    @InjectRepository(ForumReply)
    private readonly forumReplyRepository: Repository<ForumReply>,
  ) {}

  findAll() {
    return this.forumReplyRepository.find();
  }

  findOne(id: number) {
    return this.forumReplyRepository.findOneBy({ id });
  }

  create(data: Partial<ForumReply>) {
    const reply = this.forumReplyRepository.create(data);
    return this.forumReplyRepository.save(reply);
  }

  update(id: number, data: Partial<ForumReply>) {
    return this.forumReplyRepository.update(id, data);
  }

  remove(id: number) {
    return this.forumReplyRepository.delete(id);
  }
}
