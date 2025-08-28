import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLog } from '../../entities/activity-log.entity';
import { ActivityLogService } from '../../services/activity-log.service';
import { ActivityLogsController } from './activity-logs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityLog])],
  controllers: [ActivityLogsController],
  providers: [ActivityLogService],
  exports: [ActivityLogService],
})
export class ActivityLogsModule {}
