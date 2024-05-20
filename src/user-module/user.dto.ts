import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: string;
}

export class AuthUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
