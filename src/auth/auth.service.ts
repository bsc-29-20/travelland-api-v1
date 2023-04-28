import { Injectable, UnauthorizedException} from "@nestjs/common";
import { UsersService } from '../user/services/users/users.service';


//creating the authservice class and exporting it with @Injectable() decorator for business logic
@Injectable({})
export class AuthService{
    constructor(private usersService: UsersService) {}
    
    
    signup(){return 'I am signed up';}
    

} 