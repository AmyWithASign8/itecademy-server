import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateServiceDto,
  EditServiceDto,
  SubscribeServiceDto,
} from './services.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly db: PrismaService) {}

  public async create(dto: CreateServiceDto) {
    const service = await this.db.services.findFirst({
      where: { title: dto.title },
    });

    if (service) {
      throw new HttpException('Такой курс уже существует', HttpStatus.CONFLICT);
    }

    const createdService = this.db.services.create({ data: dto });

    return createdService;
  }

  public async subscribe(dto: SubscribeServiceDto) {
    const service = await this.db.userServices.findFirst({
      where: {
        serviceId: dto.serviceId,
        userId: dto.userId,
      },
    });

    if (service) {
      throw new HttpException(
        'Вы уже записаны на эту услугу',
        HttpStatus.CONFLICT,
      );
    }

    const subscribed = await this.db.userServices.create({ data: dto });

    return subscribed;
  }

  public async getAll() {
    return this.db.services.findMany({ include: { userServices: true } });
  }

  public async edit(dto: EditServiceDto) {
    await this.db.services.update({ where: { id: dto.id }, data: dto });
    return;
  }

  public async delete(id: number) {
    await this.db.services.delete({ where: { id } });
    return;
  }

  public async unsubscribe(id: number) {
    await this.db.userServices.delete({ where: { id } });
  }
}
