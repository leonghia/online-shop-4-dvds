import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserRegisterDto } from 'src/users/dtos/user-register.dto';
import * as bcrypt from "bcrypt";
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
    private readonly rounds = 10;

    public constructor(private usersService: UsersService) {}

    public async register(userRegisterDto: UserRegisterDto): Promise<User> {
        // Hash the user password
        const salt = await bcrypt.genSalt(this.rounds);
        const hash = await bcrypt.hash(userRegisterDto.password, salt);
        // Create a new user and save it
        const userToCreate = new User();
        userToCreate.email = userRegisterDto.email;
        userToCreate.fullName = userRegisterDto.fullName;
        userToCreate.passwordHash = hash;
        const userCreated = await this.usersService.create(userToCreate);
        // Return the newly created user
        return userCreated;
    }

    public async validateUser(email: string, password: string): Promise<boolean> {
        const hash = (await this.usersService.findByEmail(email))?.passwordHash;
        return hash && await bcrypt.compare(password, hash);
    }

    public login() {

    }
}
