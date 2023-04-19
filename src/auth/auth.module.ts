import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

//creating the authmodule class and exporting it with @Module() decorator
@Module({
    controllers:[AuthController],
    providers:[AuthService],
})
export class AuthModule {} 