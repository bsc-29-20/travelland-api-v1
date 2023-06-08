import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles/role.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { UpdateFlightDto } from './datatransferobjects/UpdateFlightDto';
import { CreateFlightDto } from './datatransferobjects/CreateFlightDto';

@Controller('flights')
@ApiTags('flights')
export class FlightController {
constructor(private flightsService: FlightService){}
@Get()
async getFlights() {
    return await this.flightsService.getFlights()
}

@Get(':flightid')
async getFlight(@Param('flightid', ParseIntPipe) flightid: number) {
     return this.flightsService.findFlightById(flightid);
}

@Post()
@Roles(Role.Admin)
async createFlight(@Body() createFlightDto: CreateFlightDto){
    return await this.flightsService.createFlight(createFlightDto)
}

@Patch(':flightid')
@Roles(Role.Admin)
async update(@Body() updateFlightDto: UpdateFlightDto, @Param('flightid', ParseIntPipe) flightid: number,) {
    return await this.flightsService.updateFlight(updateFlightDto, flightid);
}

@Delete(':flightid')
@Roles(Role.Admin)
async deleteFlightById(@Param('flightid', ParseIntPipe) flightid: number,){
 return await this.flightsService.deleteFlight(flightid)
 }
}
