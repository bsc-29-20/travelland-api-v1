import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "src/user/services/users/users.service";

//creating the authcontroller class and exporting it with @Controller() decorator to handle requests and responses from users
@Controller('auth')
export class AuthController{
    constructor(private usersService: UsersService) {}
    
    /*endpoint for signup
    @Post('signup')
    signup(){return this.authService.signup()
    }*/

    //endpoint for signin
    @Post('signin')
    async sign(@Body() SigninDto: any){
        const user = await this.usersService.findUserByEmail(SigninDto.email);
        if (user){
            if(user.password === SigninDto.password){
                return user;
            }
            return "password doesn't match"
        }
        return 'unauthenticated user'
    }
        
}