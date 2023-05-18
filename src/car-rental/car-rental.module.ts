import { Module } from '@nestjs/common';
import { CarRentalController } from './car-rental.controller';
import { CarRentalService } from './car-rental.service';
import { Car } from './entity/car-rentalentity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarRentalController],
  providers: [CarRentalService]
})
export class CarRentalModule {}
