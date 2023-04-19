import { Injectable } from "@nestjs/common";

//creating the authservice class and exporting it with @Injectable() decorator
@Injectable({})
export class AuthService{
    
    signup(){return 'I am signed up';}
    
    signin(){return 'I am signed in';}
} 