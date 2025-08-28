import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../entities/job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  findAll() {
    return this.jobRepository.find();
  }

  findOne(id: number) {
    return this.jobRepository.findOneBy({ id });
  }

  create(data: Partial<Job>) {
    const job = this.jobRepository.create(data);
    return this.jobRepository.save(job);
  }

  update(id: number, data: Partial<Job>) {
    return this.jobRepository.update(id, data);
  }

  remove(id: number) {
    return this.jobRepository.delete(id);
  }
}
