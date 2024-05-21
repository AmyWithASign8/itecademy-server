import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateServiceDto, SubscribeServiceDto } from './services.dto';
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
}
