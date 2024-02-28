import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserRegisterDto } from 'src/users/dtos/user-register.dto';
import * as bcrypt from "bcrypt";
import { User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from '../users/dtos/user-login.dto';
import { JwtPayload } from 'src/models/jwt-payload.model';

@Injectable()
export class AuthService {
    private readonly rounds = 10;

    public constructor(private usersService: UsersService, private jwtService: JwtService) {}

    public async register(userRegisterDto: UserRegisterDto): Promise<User> {
        // Hash the user password
        const salt = await bcrypt.genSalt(this.rounds);
        const hash = await bcrypt.hash(userRegisterDto.password, salt);
        // Create a new user and save it
        const userToCreate = new User();
        userToCreate.email = userRegisterDto.email;
        userToCreate.fullName = userRegisterDto.fullName;
        userToCreate.normalizedEmail = userRegisterDto.email.toUpperCase();
        userToCreate.passwordHash = hash;
        const userCreated = await this.usersService.create(userToCreate);
        // Return the newly created user
        return userCreated;
    }

    public async validate(email: string, password: string): Promise<User | null> {
        const user = await this.usersService.findByEmail(email);
        if (user && await bcrypt.compare(password, user.passwordHash))
            return user;
        return null;
    }

    public async login(user: User) {
        const payload = new JwtPayload(user.email, user.id);
        const accessToken = await this.jwtService.signAsync({...payload});
        return { accessToken };
    }
}
