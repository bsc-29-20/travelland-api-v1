import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type:'smallint', 
        name:'userid',
    })
    userid: number;

    @Column({
        name:'username',
        nullable: false,
        default:'',
    })
    username: string;

    @Column({
        name:'email',
        nullable: false,
        default:'',
    })
    email: string;

    @Column({
        name:'phonenumber',
        nullable: false,
        default:'',
    })
    phonenumber: string;

    @Column({
        name:'address',
        nullable: false,
        default:'',
    })
    address: string;

    @Column({
        name:'age',
        nullable: false,
        default:'',
    })
    age: string;

    @Column({
        name:'gender',
        nullable: false,
        default:'',
    })
    gender: string;
  
} 