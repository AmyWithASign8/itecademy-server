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

  public delete(id: number) {
    this.db.review.delete({ where: { id } });
  }

  public getAll() {
    return this.db.review.findMany({ include: { user: true } });
  }
}
