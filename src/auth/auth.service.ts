import { Injectable} from "@nestjs/common";
import { UsersService } from '../user/services/users/users.service';
import { JwtService } from "@nestjs/jwt";

//creating the authservice class and exporting it with @Injectable() decorator for business logic
@Injectable()
export class AuthService{
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        ) {}

    async validateUser( email:string, password:string ){
        const user = await this.usersService.findUserByEmail(email);

        if (user && await user.validatePassword(password)) {
            const { password, ...result } = user;
           return result; 
        }
      return null;

    }

    async signin (user: any){
        const payload = {email: user.email, sub:user.userid};
        return {
            access_token : this.jwtService.sign(payload),
        }
    }
    

    

} 