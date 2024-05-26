import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  CreateServiceDto,
  EditServiceDto,
  SubscribeServiceDto,
} from './services.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly service: ServicesService) {}

  @Post('create')
  async create(@Body() dto: CreateServiceDto) {
    return this.service.create(dto);
  }

  @Post('subscribe')
  async subscribe(@Body() dto: SubscribeServiceDto) {
    return this.service.subscribe(dto);
  }

  @Get('all')
  async getAllServices() {
    return this.service.getAll();
  }

  @Post('update')
  async update(@Body() dto: EditServiceDto) {
    await this.service.edit(dto);
  }

  @Delete('delete::id')
  async delete(@Param() params: { id: number }) {
    await this.service.delete(Number(params.id));
  }
}
