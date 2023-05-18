import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from 'src/booking/entity/bookingentity';
@Entity()
export class Flight {
  @PrimaryGeneratedColumn({
    type:'int', 
    name:'flightid', 
  })
  flightid: number;

  @Column({ 
    name:'airline',
  })
  airline: string;

  @Column({
    name:'flightNumber',
  })
  flightNumber: string;

  @Column({
    name:'origin',
  })
  origin: string;

  @Column({ 
    name:'destination',
  })
  destination: string;

  @Column({
    name:'departureDate',
  })
  departureDate: Date;

  @Column({
    name:'arrivalDate',
  })
  arrivalDate: Date;

  @Column({
   name:'price',
  })
  price: number;

  @OneToMany(() => Booking, booking => booking.flight)
  bookings: Booking[];
}
