// src/hotel/hotel.entity.ts

import { Booking } from 'src/booking/entity/bookingentity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn({
    type:'int', 
    name:'hotelid', 
  })
  hotelid: number;

  @Column({
    name:'hotelname', 
  })
  hotelname: string;

  @Column({
   name:'address', 
  })
  address: string;

  @Column({ 
    name:'city', 
  })
  city: string;

  @Column({
    name:'country', 
  })
  country: string;

  @Column({
    name:'rating', 
  })
  rating: number;

  @Column({
    name:'pricePerNight', 
  })
  pricePerNight: number;

  @OneToMany(() => Booking, booking => booking.flight)
  bookings: Booking[];

}
