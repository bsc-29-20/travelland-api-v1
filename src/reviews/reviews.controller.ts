import { Controller, Get, Post, Body} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './datatransferobjects/CreateReviewDto';
import { ApiTags } from '@nestjs/swagger';


@Controller('reviews')
@ApiTags('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService){}
    @Get()
    async getReviews() {
        return await this.reviewsService.getReviews()
    }

    @Post()
    async createReview(@Body() createReviewDto: CreateReviewDto){
        return await this.reviewsService.createReview(createReviewDto)
    }
    
}
