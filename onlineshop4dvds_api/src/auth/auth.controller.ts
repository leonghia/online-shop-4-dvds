import { Body, ConflictException, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { UserRegisterDto } from '../users/dtos/user-register.dto';
import { ProblemDetails } from '../models/problem-details.model';
import { UserGetDto } from '../users/dtos/user-get.dto';
import { UserLoginDto } from 'src/users/dtos/user-login.dto';

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

    @Post("login")
    public async login(@Body() userLoginDto: UserLoginDto) {

        // Check email and password
        const doesUserExist = await this.authService.validateUser(userLoginDto.email, userLoginDto.password);
        if (!doesUserExist) {
            const problemDetails = new ProblemDetails(401, [{name: "credentials", reason: "Invalid email or password."}]);
            throw new UnauthorizedException(problemDetails);
        }

        // Return tokens
        
    }
}
