import {IsNumberString, IsNotEmpty, IsString, IsDate} from "class-validator";

export class CreateReviewDto{
    @IsNumberString()
    @IsNotEmpty()
    reviewid: number;

    @IsString()    
    @IsNotEmpty()
    username: string;
 
    @IsNumberString()
    rating: number;
  
    @IsString()
    comment: string;
  
    @IsDate()
    date: Date;


}