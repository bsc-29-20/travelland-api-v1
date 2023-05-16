import { Review } from 'src/reviews/entity/reviewentity';
import { Role } from 'src/roles/role.enum';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type:'int', 
        name:'userid',
    })
    userid: number;

    @Column({
        name:'username',
        nullable: false,
    })
    username: string;

    @Column({
        name:'email',
        nullable: false,    
    })
    email: string;


    @Column({
        name:'password',
        nullable: false,
    })
    password:string;

    roles: Role[];

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
      }
    
      async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 10);
      }

    @OneToMany(() => Review, review => review.user)
    reviews: Review[];
}
  