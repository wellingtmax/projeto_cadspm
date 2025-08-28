import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { JobService } from '../../services/job.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jobService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.jobService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.jobService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jobService.remove(id);
  }
}
