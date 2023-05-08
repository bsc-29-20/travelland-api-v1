import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/datatransferobjects/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from 'src/user/datatransferobjects/UpdateUser.dto';
import { User } from 'src/user/entity/userentity';

@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

    //gets users by id
   async findUserById( userid: number){
    return await this.usersRepository.findOne({ where: { userid }});
    }

    //get by email 
    async findUserByEmail(email:string){
      return this.usersRepository.findOne({where: {email}});
    }

    //get all users
   async getUsers(){
    return await this.usersRepository.find();
      }
    
    //create users
    async createUser(userDetails: CreateUserDto){
        const newUser = this.usersRepository.create({...userDetails})
        return await this.usersRepository.save(newUser);
    }

    //update users
    async updateUser(updateUserDetails: UpdateUserDto, userid: number) {
        return this.usersRepository.update({userid},{ ...updateUserDetails});
      }
    
      //delete users
    async deleteUser(userid: number){
        return await this.usersRepository.delete({userid });
      }
}
    

