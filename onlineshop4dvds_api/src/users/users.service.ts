import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    public constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    public create(userToCreate: User): Promise<User> {
        return this.userRepository.save(userToCreate);
    }

    public findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOneBy({normalizedEmail: email.toUpperCase()});
    }
}
