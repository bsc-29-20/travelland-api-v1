import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entity/car-rentalentity';
import { Repository } from 'typeorm';
import { CreateCarDto } from './datatransferobjects/CreateCarDto';
import { UpdateCarDto } from './datatransferobjects/UpdateCarDto';

@Injectable()
export class CarRentalService {
    constructor(@InjectRepository(Car) private carsRepository: Repository<Car>){}

    //gets car by id
    async findCarById( carid: number){
    return await this.carsRepository.findOne({ where: { carid }});
    }
    
    //get all cars
    async getCars(){
    return await this.carsRepository.find();
      }
    
    //create cars
    async createCar(carDetails: CreateCarDto){
        const newCar = this.carsRepository.create({...carDetails})
        return await this.carsRepository.save(newCar);
    }
    
    //update cars
    async updateCar(updateCarDetails: UpdateCarDto, carid: number) {
        return this.carsRepository.update({carid},{ ...updateCarDetails});
      }
    
      //delete cars
    async deleteCar(carid: number){
        return await this.carsRepository.delete({carid });
      }
    }
    
