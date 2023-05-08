// reviews.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entity/reviewentity';
import { CreateReviewDto } from './datatransferobjects/CreateReviewDto';
import { UpdateReviewDto } from './datatransferobjects/UpdateReviewDto';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private reviewsRepository: Repository<Review>){}

    //get a single review by id
   async findReviewById( reviewid: number){
    return await this.reviewsRepository.findOne({ where: { reviewid }});
    }

    //get by username 
    async findReviewByUsername(username:string){
      return this.reviewsRepository.findOne({where: {username}});
    }

    //get all reviews
   async getReviews(){
    return await this.reviewsRepository.find();
      }
    
    //create reviews
    async createReview(reviewDetails: CreateReviewDto){
        const newReview = this.reviewsRepository.create({...reviewDetails})
        return await this.reviewsRepository.save(newReview);
    }

    //update reviews
    async updateReview(updateReviewDetails: UpdateReviewDto, reviewid: number) {
        return this.reviewsRepository.update({reviewid},{ ...updateReviewDetails});
      }
    
      //delete reviewss
    async deleteReview(reviewid: number){
        return await this.reviewsRepository.delete({reviewid });
      }
}
