import { PrismaService } from 'src/prisma/prisma.service';
import { AuthUserDto } from './user.dto';
import { User, UserRole } from './user.interface';
import { Prisma } from '@prisma/client';

export class UserService {
  constructor(private readonly db: PrismaService) {}

  async createUser(dto: Prisma.UserCreateInput): Promise<User> {
    const user = await this.db.user.create({ data: dto });

    if (!user) {
      throw new Error();
    }

    return {
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role as UserRole,
    };
  }

  async auth(dto: AuthUserDto): Promise<User | undefined> {
    const user = await this.db.user.findFirst({ where: dto });

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
}
