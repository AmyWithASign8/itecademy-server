import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthUserDto, CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Post('registration')
  async create(@Body() createDto: CreateUserDto) {
    return this.userService.createUser(createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async auth(@Body() dto: AuthUserDto) {
    return this.userService.auth(dto);
  }

  @Delete('delete::id')
  async deleteUser(@Param() params: { id: number }) {
    await this.userService.delete(Number(params.id));
  }

  @Get()
  async getAll() {
    return await this.userService.getAllUsers();
  }
}
