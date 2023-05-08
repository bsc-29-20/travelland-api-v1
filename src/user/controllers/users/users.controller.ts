import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { CreateUserDto } from 'src/user/datatransferobjects/CreateUser.dto';
import { UpdateUserDto } from 'src/user/datatransferobjects/UpdateUser.dto';
import { UsersService } from 'src/user/services/users/users.service';

@Controller('users')
@UseInterceptors(LoggingInterceptor)
export class UsersController {
    constructor(private usersService: UsersService){}
    @Get()
    async getUsers() {
        return await this.usersService.getUsers()
    }

    @Get(':userid')
    async getUser(@Param('userid', ParseIntPipe) userid: number) {
         return this.usersService.findUserById(userid);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return await this.usersService.createUser(createUserDto)
    }
    
    @Patch(':userid')
    async update(@Body() updateUserDto: UpdateUserDto, @Param('userid', ParseIntPipe) userid: number,) {
        return await this.usersService.updateUser(updateUserDto, userid);
    }

    @Delete(':userid')
    async deleteUserById(@Param('userid', ParseIntPipe) userid: number,){
     return await this.usersService.deleteUser(userid)
    }
}
