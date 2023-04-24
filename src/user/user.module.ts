import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';


// creating the usermodule class and exporting it 
@Module({
  controllers: [UsersController],
  providers: [UsersService]
  
})
export class UserModule {}
