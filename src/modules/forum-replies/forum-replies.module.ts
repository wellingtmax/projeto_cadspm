import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForumReply } from '../../entities/forum-reply.entity';
import { ForumReplyService } from '../../services/forum-reply.service';
import { ForumRepliesController } from './forum-replies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ForumReply])],
  controllers: [ForumRepliesController],
  providers: [ForumReplyService],
  exports: [ForumReplyService],
})
export class ForumRepliesModule {}
