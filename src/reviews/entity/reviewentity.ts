import { User } from 'src/user/entity/userentity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn({
    type:'int', 
    name:'reviewid',
  })
  reviewid: number;

  @Column({
    name:'rating',
  })
  rating: number;

  @Column({
    name:'comment',
  })
  comment: string;

  @Column({
    name:'date',
  })
  date: Date;

  @ManyToOne(() => User, user => user.reviews)
  user: User;
}
