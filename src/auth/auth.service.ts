import { Injectable } from "@nestjs/common";

//creating the authservice class and exporting it with @Injectable() decorator for business logic
@Injectable({})
export class AuthService{
    
    signup(){return 'I am signed up';}
    
    signin(){return 'I am signed in';}
} 