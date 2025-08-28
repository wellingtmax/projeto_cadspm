import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityLog } from '../entities/activity-log.entity';

@Injectable()
export class ActivityLogService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
  ) {}

  findAll() {
    return this.activityLogRepository.find();
  }

  findOne(id: number) {
    return this.activityLogRepository.findOneBy({ id });
  }

  create(data: Partial<ActivityLog>) {
    const log = this.activityLogRepository.create(data);
    return this.activityLogRepository.save(log);
  }

  update(id: number, data: Partial<ActivityLog>) {
    return this.activityLogRepository.update(id, data);
  }

  remove(id: number) {
    return this.activityLogRepository.delete(id);
  }
}
