import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user-module/user.module';
import { ServicesModule } from './services-module/services.module';
import { ReviewModule } from './review-module/review.module';

@Module({
  imports: [PrismaModule, UserModule, ServicesModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
