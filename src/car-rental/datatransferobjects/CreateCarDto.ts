import { IsBooleanString, IsNumber, IsString } from "class-validator";

export class CreateCarDto {

    @IsString()
    make: string;
    
    @IsString()
    model: string;

    @IsNumber()
    year: number;
    
    @IsNumber()
    pricePerDay: number;

    @IsBooleanString()
    isAvailable: boolean;
  }
  