import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;
}

export class SubscribeServiceDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  serviceId: number;
}
