import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarRentalService } from './car-rental.service';
import { Roles } from 'src/roles/role.decorator';
import { Role } from 'src/roles/role.enum';
import { CreateCarDto } from './datatransferobjects/CreateCarDto';
import { UpdateCarDto } from './datatransferobjects/UpdateCarDto';
import { ApiTags } from '@nestjs/swagger';

@Controller('carRentals')
@ApiTags('carRentals')
export class CarRentalController {
    constructor(private carRentalsService: CarRentalService){}

@Get()
async getCars() {
    return await this.carRentalsService.getCars()
}

@Get(':carid')
async getFlight(@Param('flightid', ParseIntPipe) carid: number) {
     return this.carRentalsService.findCarById(carid);
}

@Post()
@Roles(Role.Admin)
async createFlight(@Body() createCarDto: CreateCarDto){
    return await this.carRentalsService.createCar(createCarDto)
}

@Patch(':carid')
@Roles(Role.Admin)
async update(@Body() updateCarDto: UpdateCarDto, @Param('carid', ParseIntPipe) carid: number,) {
    return await this.carRentalsService.updateCar(updateCarDto, carid);
}

@Delete(':carid')
@Roles(Role.Admin)
async deleteCarById(@Param('carid', ParseIntPipe) carid: number,){
 return await this.carRentalsService.deleteCar(carid)
 }
}
