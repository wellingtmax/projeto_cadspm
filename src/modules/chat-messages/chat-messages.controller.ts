import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChatMessageService } from '../../services/chat-message.service';

@Controller('sala-mensagens')
export class ChatMessagesController {
  constructor(private readonly chatMessageService: ChatMessageService) {}

  @Get()
  findAll() {
    return this.chatMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.chatMessageService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.chatMessageService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.chatMessageService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.chatMessageService.remove(id);
  }
}
