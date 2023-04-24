import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/datatransferobjects/CreateUser.dto';

@Injectable()
export class UsersService {
    private  users =[
        {
            userid: 1,
            username:'Namariya',
            email:'namariyamulewa@gmail.com',
            phone_number:'0993793094',
            address:'Lilongwe Area 49',
            age:'20',
            gender:'Male',
          
        },
        {
            userid: 2,
            username:'Mphatso',
            email:'mphatsobanda@gmail.com',
            phone_number:'0884793094',
            address:'Lilongwe Area 49',
            age:'16',
            gender:'Male',
            
        },
        {
            userid: 3,
            username:'John',
            email:'johndoe@gmail.com',
            phone_number:'0999344394',
            address:'Lilongwe Area 43',
            age:'19',
            gender:'Male',
            
        },
    ];

    //gets users by id
    findUserById( userid: number){
        return this.users.find((user) => user.userid  === userid)
    }

    //create users
    createUser(userDto: CreateUserDto){
        this.users.push(userDto);
    }

    //get all users
    getUsers(){
        return this.users;
    }
}
