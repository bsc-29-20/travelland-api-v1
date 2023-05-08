import { Request, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport/dist/auth.guard";

//creating the authcontroller class and exporting it with @Controller() decorator to handle requests and responses from users
@Controller('auth')
export class AuthController{
    constructor (private authService: AuthService){}
   
    //endpoint for signin
    @UseGuards(AuthGuard('local'))
    @Post('signin')
    async signin(@Request() req: any){
        return this.authService.signin(req.user);
       
    }
        
}