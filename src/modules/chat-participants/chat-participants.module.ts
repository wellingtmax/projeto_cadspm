import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatParticipant } from '../../entities/chat-participant.entity';
import { ChatParticipantService } from '../../services/chat-participant.service';
import { ChatParticipantsController } from './chat-participants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChatParticipant])],
  controllers: [ChatParticipantsController],
  providers: [ChatParticipantService],
  exports: [ChatParticipantService],
})
export class ChatParticipantsModule {}
