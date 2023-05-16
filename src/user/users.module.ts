import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from 'src/user/entity/userentity';
import { AuthModule } from 'src/auth/auth.module';


// creating the usermodule class and exporting it 
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  
})
export class UsersModule {}
