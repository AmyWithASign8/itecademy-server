import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
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
}
