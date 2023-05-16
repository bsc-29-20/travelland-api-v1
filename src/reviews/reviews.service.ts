// reviews.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entity/reviewentity';
import { CreateReviewDto } from './datatransferobjects/CreateReviewDto';


@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private reviewsRepository: Repository<Review>){}
  
   //get all reviews
   async getReviews(){
    return await this.reviewsRepository.find();
      }
    
    //create reviews
    async createReview(reviewDetails: CreateReviewDto){
        const newReview = this.reviewsRepository.create({...reviewDetails})
        return await this.reviewsRepository.save(newReview);
    }
   
    
}
