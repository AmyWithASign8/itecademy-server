import { PrismaService } from 'src/prisma/prisma.service';
import { AuthUserDto } from './user.dto';
import { User, UserRole } from './user.interface';
import { Prisma } from '@prisma/client';
import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async createUser(dto: Prisma.UserCreateInput): Promise<User> {
    const user = await this.db.user.findFirst({
      where: {
        email: dto.email,
      },
    });

    if (user) {
      throw new HttpException(
        'Такой пользователь уже существует',
        HttpStatus.CONFLICT,
      );
    }

    const createdUser = await this.db.user.create({ data: dto });

    if (!createdUser) {
      return undefined;
    }

    return {
      id: createdUser.id,
      email: createdUser.email,
      password: createdUser.password,
      role: createdUser.role as UserRole,
    };
  }

  async auth(dto: AuthUserDto): Promise<User | undefined> {
    const user = await this.db.user.findFirst({ where: dto });

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role as UserRole,
    };
  }

  getAllUsers() {
    return this.db.user.findMany();
  }

  async delete(id: number) {
    await this.db.user.delete({ where: { id: id } });
  }
}
