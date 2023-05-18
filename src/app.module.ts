import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/userentity';
import { Review } from './reviews/entity/reviewentity';
import { ReviewsModule } from './reviews/reviews.module';
import { FlightModule } from './flight/flight.module';
import { Flight } from './flight/entity/flightentity';
import { HotelModule } from './hotel/hotel.module';
import { Hotel } from './hotel/entity/hotelentity';
import { CarRentalModule } from './car-rental/car-rental.module';
import { Car } from './car-rental/entity/car-rentalentity';
import { BookingModule } from './booking/booking.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/role.guard';
import { Booking } from './booking/entity/bookingentity';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    ReviewsModule,
    FlightModule, 
    HotelModule, 
    CarRentalModule, 
    BookingModule,
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'',
    database:'travelland_api_v1',
    entities:[User,Review, Flight, Hotel, Car, Booking],
    synchronize: true,

    }),
   
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  
  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}
