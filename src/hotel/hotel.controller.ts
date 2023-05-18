import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateHotelDto } from './datatransferobjects/CreateHotelDto';
import { UpdateHotelDto } from './datatransferobjects/UpdateHotelDto';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';

@Controller('hotels')
@ApiTags('hotels')
export class HotelController {
constructor(private hotelsService: HotelService){}
@Get()
async getHotels() {
    return await this.hotelsService.getHotels()
}

@Get(':hotelid')
async getFlight(@Param('hotelid', ParseIntPipe) hotelid: number) {
     return this.hotelsService.findHotelById(hotelid);
}

@Post()
@Roles(Role.Admin)
async createHotel(@Body() createHotelDto: CreateHotelDto){
    return await this.hotelsService.createHotel(createHotelDto)
}

@Patch(':hotelid')
@Roles(Role.Admin)
async update(@Body() updateHotelDto: UpdateHotelDto, @Param('hotelid', ParseIntPipe) hotelid: number,) {
    return await this.hotelsService.updateHotel(updateHotelDto, hotelid);
}

@Delete(':hotelid')
@Roles(Role.Admin)
async deleteHotelById(@Param('hotelid', ParseIntPipe) hotelid: number,){
 return await this.hotelsService.deleteHotel(hotelid)
 }
}
