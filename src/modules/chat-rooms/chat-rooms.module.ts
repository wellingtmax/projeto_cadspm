import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from '../../entities/chat-room.entity';
import { ChatRoomService } from '../../services/chat-room.service';
import { ChatRoomsController } from './chat-rooms.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRoom])],
  controllers: [ChatRoomsController],
  providers: [ChatRoomService],
  exports: [ChatRoomService],
})
export class ChatRoomsModule {}
