import { Module, NestModule, MiddlewareConsumer, } from '@nestjs/common';
import { logger } from './middleware/logger.middleware'
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
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RolesGuard } from './auth/roles/role.guard';
import { Booking } from './booking/entity/bookingentity';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { ExcludeNullInterceptor } from './interceptors/excludenull.interceptor';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';

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
    host:'sql9.freemysqlhosting.net',
    port: 3306,
    username:'sql9632668',
    password:'aKC9ePTXnb',
    database:' sql9632668',
    entities:[User,Review, Flight, Hotel, Car, Booking],
    synchronize: true,

    }),
   
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor, 
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor, 
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor, 
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor, 
    },
  ],
  
  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes('users');
  }
}
