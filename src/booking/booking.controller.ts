import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { Roles } from 'src/auth/roles/role.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { CreateBookingDto } from './datatransferobjects/CreateBookingDto';
import { UpdateBookingDto } from './datatransferobjects/UpdateBookingDto';

@Controller('booking')
@ApiTags('booking')
export class BookingController {    
constructor(private bookingService: BookingService){}
@Get()
@Roles(Role.Admin)
async getBookings() {
    return await this.bookingService.getBookings()
}

@Get(':bookingid')
async getFlight(@Param('bookingid', ParseIntPipe) bookingid: number) {
     return this.bookingService.findBookingById(bookingid);
}

@Post()
async createBooking(@Body() createBookingDto: CreateBookingDto){
    return await this.bookingService.createBooking(createBookingDto)
}

@Patch(':bookingid')
async update(@Body() updateBookingDto: UpdateBookingDto, @Param('bookingid', ParseIntPipe) bookingid: number,) {
    return await this.bookingService.updateBooking(updateBookingDto, bookingid);
}

@Delete(':bookingid')
async deleteBookingById(@Param('bookingid', ParseIntPipe) bookingid: number,){
 return await this.bookingService.deleteBooking(bookingid)
 }

}
