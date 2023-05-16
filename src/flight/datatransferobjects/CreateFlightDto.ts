// src/flight/dtos/create-flight.dto.ts

import { IsAlphanumeric, IsDate, IsDecimal, IsString } from "class-validator";

export class CreateFlightDto {

    @IsString()
    airline: string;
    
    @IsAlphanumeric()
    flightNumber: string;

    @IsString()
    origin: string;
    
    @IsString()
    destination: string;
   
    @IsDate()
    departureDate: Date;

    @IsDate()
    arrivalDate: Date;

    @IsDecimal()
    price: number;
  }
  