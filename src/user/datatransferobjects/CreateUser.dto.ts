import {IsNumberString, IsNotEmpty, IsEmail, IsString} from "class-validator";

export class CreateUserDto{
    @IsNumberString()
    @IsNotEmpty()
    userid: number;

    @IsString()    
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    phone_number: string;

    @IsString()
    address: string;

    @IsNumberString()
    age:string;

    @IsString()
    gender: string;

    @IsString()
    @IsNotEmpty()
    password: string;


}