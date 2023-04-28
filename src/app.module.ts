import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/typeorm/userentity';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'',
    database:'travelland_api_v1',
    entities:[User],
    synchronize: true,

    }), ProfileModule
  ],

  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('user');
  }
}
