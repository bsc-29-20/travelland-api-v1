import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/user/users.module";

//creating the authmodule class and exporting it with @Module() decorator
@Module({
    imports:[UsersModule],
    controllers:[AuthController],
    providers:[AuthService],
})
export class AuthModule {} 