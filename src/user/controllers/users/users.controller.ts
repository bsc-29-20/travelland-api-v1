import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles/role.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { CreateUserDto } from 'src/user/datatransferobjects/CreateUser.dto';
import { UpdateUserDto } from 'src/user/datatransferobjects/UpdateUser.dto';
import { UsersService } from 'src/user/services/users/users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Get()
    @Roles(Role.Admin)
    async getUsers() {
        return await this.usersService.getUsers()
    }

    @Get(':userid')
    @Roles(Role.Admin)
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
    @Roles(Role.Admin)
    async deleteUserById(@Param('userid', ParseIntPipe) userid: number,){
     return await this.usersService.deleteUser(userid)
    }
}
