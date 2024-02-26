import { Controller, Post, Body } from "@nestjs/common";
import { UserRegisterDto } from "./dtos/user-register.dto";


@Controller("auth")
export class AuthController {

    @Post("/register")
    register(@Body() body: UserRegisterDto) {
        console.log(body);
    }
}