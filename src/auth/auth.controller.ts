import { Request, Controller, Post, UseGuards, Get, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { CreateUserDto } from "src/user/datatransferobjects/CreateUser.dto";
import { ApiTags } from "@nestjs/swagger";

//creating the authcontroller class and exporting it with @Controller() decorator to handle requests and responses from users
@Controller('auth')
@ApiTags('auth')
export class AuthController{
    userService: any;
    constructor (private authService: AuthService){} 
    //endpoint for signin
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signin(@Request() req: any){
        return this.authService.signin(req.user);   
    }
    @Post('signup')
     async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return { user };
  }
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
  }
        
}