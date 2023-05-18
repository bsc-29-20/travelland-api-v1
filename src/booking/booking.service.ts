import { Injectable } from '@nestjs/common';
import { Booking } from './entity/bookingentity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './datatransferobjects/CreateBookingDto';
import { UpdateBookingDto } from './datatransferobjects/UpdateBookingDto';

@Injectable()
export class BookingService {
    constructor(@InjectRepository(Booking) private bookingRepository: Repository<Booking>){}

    //gets booking by id
    async findBookingById( bookingid: number){
    return await this.bookingRepository.findOne({ where: { bookingid }});
    }
    
    //get all bookings
    async getBookings(){
    return await this.bookingRepository.find();
      }
    
    //create bookings
    async createBooking(bookingDetails: CreateBookingDto){
        const newBooking = this.bookingRepository.create({...bookingDetails})
        return await this.bookingRepository.save(newBooking);
    }
    
    //update bookings
    async updateBooking(updateBookingDetails: UpdateBookingDto, bookingid: number) {
        return this.bookingRepository.update({bookingid},{ ...updateBookingDetails});
      }
    
      //delete cars
    async deleteBooking(bookingid: number){
        return await this.bookingRepository.delete({bookingid });
      }

}
