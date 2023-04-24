import { Controller, Get, Param, ParseIntPipe, Post, Req, Res, Body} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { Request,Response} from 'express';
import { CreateUserDto } from 'src/user/datatransferobjects/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    //Get user by id
    @Get(':userid')
    getUser(
    @Param('userid', ParseIntPipe) userid: number,
    @Req() req: Request,
    @Res() res: Response
    )
    {
    const user = this.usersService.findUserById(userid);   
    if (user) {
        res.send(user);
    }
    else{
        res.status(404).send({msg: 'User not found'});
    }
}

   /*The nestjs way to get user by id 
   @Get('/search/:userid'){
    searchUserById(@Param('userid',ParseTntPipe)userid: number){
        const user = this.UsersService.findUserById(userid);
        if (user) return user;
        else throw new HttpException('User not found!', HttpStatus.BAD_REQUEST);
    }

   }*/
   @Get()
   getAllUsers(){
    return this.usersService.getUsers();
   }

   @Post()
    createUser(@Body() createUserDto: CreateUserDto ){
        this.usersService.createUser(createUserDto);
   }


}

