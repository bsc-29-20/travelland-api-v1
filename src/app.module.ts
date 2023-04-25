import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/User';


@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username:'root',
    password:'',
    database:'travelland_api_v1',
    entities:[User],
    synchronize: true,

    })
  ],

  
})
export class AppModule {}
