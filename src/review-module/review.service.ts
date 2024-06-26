import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './review.dto';

@Injectable()
export class ReviewService {
  constructor(private readonly db: PrismaService) {}

  public create(dto: CreateReviewDto) {
    const review = this.db.review.create({ data: dto });

    return review;
  }

  public async delete(id: number) {
    await this.db.review.delete({ where: { id } });
    return;
  }

  public getAll() {
    return this.db.review.findMany({
      include: { user: true },
      orderBy: { id: 'desc' },
    });
  }
}
