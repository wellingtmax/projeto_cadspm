import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessage } from '../../entities/chat-message.entity';
import { ChatMessageService } from '../../services/chat-message.service';
import { ChatMessagesController } from './chat-messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage])],
  controllers: [ChatMessagesController],
  providers: [ChatMessageService],
  exports: [ChatMessageService],
})
export class ChatMessagesModule {}
