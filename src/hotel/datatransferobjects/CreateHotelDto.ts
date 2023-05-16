// src/hotel/dtos/create-hotel.dto.ts

import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateHotelDto {

    @IsString()
    hotelname: string;

    @IsString()
    address: string;
    
    @IsString()
    city: string;
    
    @IsString()
    country: string;
    
    @IsNumber()
    rating: number;
    
    @IsDecimal()
    pricePerNight: number;
  }
  