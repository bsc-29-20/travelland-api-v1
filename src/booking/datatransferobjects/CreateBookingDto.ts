import { IsDate, IsNumber } from "class-validator";

export class CreateBookingDto {

    @IsNumber()
    userId: number;

    @IsNumber()
    flightId: number;

    @IsNumber()
    hotelId: number;
    
    @IsNumber()
    carId: number;

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;
  }
  