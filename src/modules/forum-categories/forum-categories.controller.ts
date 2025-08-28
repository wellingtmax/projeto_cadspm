import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ForumCategoryService } from '../../services/forum-category.service';

@Controller('forum-categorias')
export class ForumCategoriesController {
  constructor(private readonly forumCategoryService: ForumCategoryService) {}

  @Get()
  findAll() {
    return this.forumCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.forumCategoryService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.forumCategoryService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.forumCategoryService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.forumCategoryService.remove(id);
  }
}
