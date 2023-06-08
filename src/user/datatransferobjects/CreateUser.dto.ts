import { IsString, IsEmail, MinLength, IsNumber } from 'class-validator';
import { Role } from 'src/auth/roles/role.enum';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phone_number: number;

  @IsString()
  @MinLength(6)
  password: string;

  roles: Role[];
  
}
