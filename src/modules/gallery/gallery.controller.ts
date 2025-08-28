import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GalleryService } from '../../services/gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.galleryService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.galleryService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.galleryService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.galleryService.remove(id);
  }
}
