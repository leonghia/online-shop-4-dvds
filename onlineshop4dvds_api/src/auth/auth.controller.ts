import { Body, ConflictException, Controller, HttpCode, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { UserRegisterDto } from '../users/dtos/user-register.dto';
import { ProblemDetails } from '../models/problem-details.model';
import { UserGetDto } from '../users/dtos/user-get.dto';
import { UserLoginDto } from '../users/dtos/user-login.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {

    public constructor(private usersService: UsersService, private authService: AuthService) {}

    @Post("register")
    public async register(@Body() userRegisterDto: UserRegisterDto) {

        // Check if email exists
        const user = await this.usersService.findByEmail(userRegisterDto.email);

        if (user) {
            const problemDetails = new ProblemDetails(409, [{name: "email", reason: "Email already exists."}]);
            throw new ConflictException(problemDetails);
        }

        // Proceed to register the user
        const userCreated = await this.authService.register(userRegisterDto);
        const userToReturn = new UserGetDto();
        userToReturn.id = userCreated.id;
        userToReturn.email = userCreated.email;
        userToReturn.fullName = userCreated.fullName;

        return userToReturn;
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post("login")
    public async login(@Body() userLoginDto: UserLoginDto) {
        return "login successfully :)";
    }
}
