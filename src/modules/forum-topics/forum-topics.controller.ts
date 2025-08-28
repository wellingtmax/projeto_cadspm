import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ForumTopicService } from '../../services/forum-topic.service';

@Controller('forum-topics')
export class ForumTopicsController {
  constructor(private readonly forumTopicService: ForumTopicService) {}

  @Get()
  findAll() {
    return this.forumTopicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.forumTopicService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.forumTopicService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.forumTopicService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.forumTopicService.remove(id);
  }
}
