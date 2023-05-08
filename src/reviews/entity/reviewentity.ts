import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn({
    type:'smallint', 
    name:'reviewid',
  })
  reviewid: number;

  @Column({
    name:'username',
    nullable: false,
    default:'',
  })
  username: string;

  @Column({
    name:'rating',
    nullable: false,
  })
  rating: number;

  @Column({
    name:'comment',
    nullable: false,
    default:'',
  })
  comment: string;

  @Column({
    name:'date',
    nullable: false,
  })
  date: Date;
}
