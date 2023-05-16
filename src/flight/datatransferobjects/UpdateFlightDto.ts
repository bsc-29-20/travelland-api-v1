// src/flight/dtos/create-flight.dto.ts

export class UpdateFlightDto {
    airline: string;
    flightNumber: string;
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    price: number;
  }
  