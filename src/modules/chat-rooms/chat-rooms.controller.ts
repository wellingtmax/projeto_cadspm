import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChatRoomService } from '../../services/chat-room.service';

@Controller('bate-papo')
export class ChatRoomsController {
  constructor(private readonly chatRoomService: ChatRoomService) {}

  @Get()
  findAll() {
    return this.chatRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.chatRoomService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.chatRoomService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.chatRoomService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.chatRoomService.remove(id);
  }
}
