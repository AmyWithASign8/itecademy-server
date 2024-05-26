import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class SubscribeServiceDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  serviceId: number;
}

export class EditServiceDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;
}