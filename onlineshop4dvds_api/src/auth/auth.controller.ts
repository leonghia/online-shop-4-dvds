import { Body, ConflictException, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { UserRegisterDto } from '../users/dtos/user-register.dto';
import { ProblemDetails } from '../models/problem-details.model';
import { UserGetDto } from '../users/dtos/user-get.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { MailService } from 'src/mail/mail.service';
import { registrationConfirmation } from 'src/utils/mail-templates';

@Controller('auth')
export class AuthController {

    public constructor(private usersService: UsersService, private authService: AuthService, private mailService: MailService) {}

    @Post("register")
    public async register(@Body() userRegisterDto: UserRegisterDto) {

        // Check if email exists
        const user = await this.usersService.findByEmail(userRegisterDto.email);

        if (user) {
            const problemDetails = new ProblemDetails();
            problemDetails.error = "Conflict";
            problemDetails.statusCode = 409;
            problemDetails.message = ["Email này đã tồn tại"];
            throw new ConflictException(problemDetails);
        }

        // Proceed to register the user
        const userCreated = await this.authService.register(userRegisterDto);
        const userToReturn = new UserGetDto();
        userToReturn.id = userCreated.id;
        userToReturn.email = userCreated.email;
        userToReturn.fullName = userCreated.fullName;

        // Send confirmation email
        await this.mailService.send("Welcome to OnlineShop4DVDS", registrationConfirmation, userCreated.email);

        return userToReturn;
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post("login")
    public async login(@Request() req) {
        return await this.authService.login(req.user);
    }
}
