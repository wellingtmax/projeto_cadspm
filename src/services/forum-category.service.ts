import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ForumCategory } from '../entities/forum-category.entity';

@Injectable()
export class ForumCategoryService {
  constructor(
    @InjectRepository(ForumCategory)
    private readonly forumCategoryRepository: Repository<ForumCategory>,
  ) {}

  findAll() {
    return this.forumCategoryRepository.find();
  }

  findOne(id: number) {
    return this.forumCategoryRepository.findOneBy({ id });
  }

  create(data: Partial<ForumCategory>) {
    const category = this.forumCategoryRepository.create(data);
    return this.forumCategoryRepository.save(category);
  }

  update(id: number, data: Partial<ForumCategory>) {
    return this.forumCategoryRepository.update(id, data);
  }

  remove(id: number) {
    return this.forumCategoryRepository.delete(id);
  }
}
