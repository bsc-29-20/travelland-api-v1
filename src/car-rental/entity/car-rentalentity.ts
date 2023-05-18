import { Booking } from 'src/booking/entity/bookingentity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn({
    type:'int', 
    name:'carid', 
  })
  carid: number;

  @Column({
   name:'make', 
  })
  make: string;

  @Column({
   name:'model', 
  })
  model: string;

  @Column({
   name:'year', 
  })
  year: number;

  @Column({
   name:'pricePerDay', 
  })
  pricePerDay: number;

  @Column({
   name:'isAvailable', 
  })
  isAvailable: boolean;
  
  @OneToMany(() => Booking, booking => booking.user)
  bookings: Booking[];
}
