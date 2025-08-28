import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumTopic } from '../../entities/forum-topic.entity';
import { ForumTopicService } from '../../services/forum-topic.service';
import { ForumTopicsController } from './forum-topics.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ForumTopic])],
  controllers: [ForumTopicsController],
  providers: [ForumTopicService],
  exports: [ForumTopicService],
})
export class ForumTopicsModule {}
