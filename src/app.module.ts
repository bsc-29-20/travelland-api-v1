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



@Module({
  imports: [AuthModule, UsersModule, ReviewsModule, FlightModule, HotelModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'',
    database:'travelland_api_v1',
    entities:[User,Review, Flight, Hotel],
    synchronize: true,

    }),
  ],
  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}
