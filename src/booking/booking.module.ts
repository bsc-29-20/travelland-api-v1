import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entity/bookingentity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports: [TypeOrmModule.forFeature([Booking])],
  providers: [BookingService],
  controllers: [BookingController]
})
export class BookingModule {}
