import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ActivityLogService } from '../../services/activity-log.service';

@Controller('tipo-atividade')
export class ActivityLogsController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Get()
  findAll() {
    return this.activityLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activityLogService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.activityLogService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.activityLogService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.activityLogService.remove(id);
  }
}
