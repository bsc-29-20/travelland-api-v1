import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


//creating the authcontroller class and exporting it with @Controller() decorator to handle requests and responses from users
@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}
    
    //endpoint for signup
    @Post('signup')
    signup(){return this.authService.signup()
    }

    //endpoint for signin
    @Post('signin')
    sign(){return this.authService.signup()
    }
        
}