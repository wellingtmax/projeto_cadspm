import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ForumReplyService } from '../../services/forum-reply.service';

@Controller('replies')
export class ForumRepliesController {
  constructor(private readonly forumReplyService: ForumReplyService) {}

  @Get()
  findAll() {
    return this.forumReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.forumReplyService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.forumReplyService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.forumReplyService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.forumReplyService.remove(id);
  }
}
