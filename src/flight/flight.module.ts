import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { Flight } from './entity/flightentity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])], 
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
