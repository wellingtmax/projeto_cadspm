import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForumTopic } from '../entities/forum-topic.entity';

@Injectable()
export class ForumTopicService {
  constructor(
    @InjectRepository(ForumTopic)
    private readonly forumTopicRepository: Repository<ForumTopic>,
  ) {}

  findAll() {
    return this.forumTopicRepository.find();
  }

  findOne(id: number) {
    return this.forumTopicRepository.findOneBy({ id });
  }

  create(data: Partial<ForumTopic>) {
    const topic = this.forumTopicRepository.create(data);
    return this.forumTopicRepository.save(topic);
  }

  update(id: number, data: Partial<ForumTopic>) {
    return this.forumTopicRepository.update(id, data);
  }

  remove(id: number) {
    return this.forumTopicRepository.delete(id);
  }
}
