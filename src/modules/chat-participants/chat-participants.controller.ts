import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChatParticipantService } from '../../services/chat-participant.service';

@Controller('sala-participantes')
export class ChatParticipantsController {
  constructor(private readonly chatParticipantService: ChatParticipantService) {}

  @Get()
  findAll() {
    return this.chatParticipantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.chatParticipantService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.chatParticipantService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.chatParticipantService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.chatParticipantService.remove(id);
  }
}
