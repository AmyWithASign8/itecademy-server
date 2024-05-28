import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly service: ReviewService) {}

  @Post('create')
  public async createReview(@Body() dto: CreateReviewDto) {
    const review = await this.service.create(dto);

    return review;
  }

  @Delete('delete')
  public async deleteReview(@Param() params: { id: number }) {
    await this.service.delete(Number(params.id));
  }

  @Get('get-all')
  public async getAllReview() {
    return await this.service.getAll();
  }
}
