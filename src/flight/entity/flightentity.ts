// src/flight/flight.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
