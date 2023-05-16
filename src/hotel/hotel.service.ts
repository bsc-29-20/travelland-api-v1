import { Injectable } from '@nestjs/common';
import { Hotel } from './entity/hotelentity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHotelDto } from './datatransferobjects/CreateHotelDto';
import { UpdateHotelDto } from './datatransferobjects/UpdateHotelDto';

@Injectable()
export class HotelService { 
    constructor(@InjectRepository(Hotel) private hotelsRepository: Repository<Hotel>){}

//gets flight by id
async findHotelById( hotelid: number){
return await this.hotelsRepository.findOne({ where: { hotelid }});
}


//get all 
async getHotels(){
return await this.hotelsRepository.find();
  }

//create users
async createHotel(hotelDetails: CreateHotelDto){
    const newHotel = this.hotelsRepository.create({...hotelDetails})
    return await this.hotelsRepository.save(newHotel);
}

//update users
async updateHotel(updateHotelDetails: UpdateHotelDto, hotelid: number) {
    return this.hotelsRepository.update({hotelid},{ ...updateHotelDetails});
  }

  //delete users
async deleteHotel(hotelid: number){
    return await this.hotelsRepository.delete({hotelid });
  }}

