
import { Car } from 'src/car-rental/entity/car-rentalentity';
import { Flight } from 'src/flight/entity/flightentity';
import { Hotel } from 'src/hotel/entity/hotelentity';
import { User } from 'src/user/entity/userentity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  bookingid: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, user => user.bookings)
  user: User;

  @Column({ nullable: true })
  flightId: number;

  @ManyToOne(() => Flight, flight => flight.bookings)
  flight: Flight;

  @Column({ nullable: true })
  hotelId: number;

  @ManyToOne(() => Hotel, hotel => hotel.bookings)
  hotel: Hotel;

  @Column({ nullable: true })
  carId: number;

  @ManyToOne(() => Car, car => car.bookings)
  car: Car;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
