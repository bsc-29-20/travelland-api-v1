import { Controller, Get, Post, Body, Patch, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from './entity/reviewentity';
import { CreateReviewDto } from './datatransferobjects/CreateReviewDto';
import { UpdateReviewDto } from './datatransferobjects/UpdateReviewDto';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService){}
    @Get()
    async getReviews() {
        return await this.reviewsService.getReviews()
    }

    @Get(':reviewid')
    async getReview(@Param('reviewid', ParseIntPipe)reviewid: number) {
         return this.reviewsService.findReviewById(reviewid);
    }

    @Post()
    async createReview(@Body() createReviewDto: CreateReviewDto){
        return await this.reviewsService.createReview(createReviewDto)
    }
    
    @Patch(':reviewid')
    async update(@Body() updateReviewDto: UpdateReviewDto, @Param('reviewid', ParseIntPipe) reviewid: number,) {
        return await this.reviewsService.updateReview(updateReviewDto, reviewid);
    }

    @Delete(':reviewid')
    async deleteReviewById(@Param('reviewid', ParseIntPipe) reviewid: number,){
     return await this.reviewsService.deleteReview(reviewid)
    }
}
