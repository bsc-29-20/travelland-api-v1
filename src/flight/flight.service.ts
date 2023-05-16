import { Injectable } from '@nestjs/common';
import { Flight } from './entity/flightentity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlightDto } from './datatransferobjects/CreateFlightDto';
import { UpdateFlightDto } from './datatransferobjects/UpdateFlightDto';

@Injectable()
export class FlightService { 
    constructor(@InjectRepository(Flight) private flightsRepository: Repository<Flight>){}

//gets flight by id
async findFlightById( flightid: number){
return await this.flightsRepository.findOne({ where: { flightid }});
}


//get all 
async getFlights(){
return await this.flightsRepository.find();
  }

//create users
async createFlight(flightDetails: CreateFlightDto){
    const newFlight = this.flightsRepository.create({...flightDetails})
    return await this.flightsRepository.save(newFlight);
}

//update users
async updateFlight(updateFlightDetails: UpdateFlightDto, flightid: number) {
    return this.flightsRepository.update({flightid},{ ...updateFlightDetails});
  }

  //delete users
async deleteFlight(flightid: number){
    return await this.flightsRepository.delete({flightid });
  }}
