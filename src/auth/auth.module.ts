import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "src/user/users.module";
import { PassportModule } from "@nestjs/passport/dist";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth.constant";
import { JwtStrategy } from "./jwt.strategy";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";

//creating the authmodule class and exporting it with @Module() decorator
@Module({
    imports:[UsersModule,
         PassportModule,
         JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '60s'}
        })
],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy, JwtStrategy, 
        {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
      
    ],
})
export class AuthModule {} 