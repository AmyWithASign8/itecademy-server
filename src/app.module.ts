import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user-module/user.module';
import { ServicesModule } from './services-module/services.module';

@Module({
  imports: [PrismaModule, UserModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
