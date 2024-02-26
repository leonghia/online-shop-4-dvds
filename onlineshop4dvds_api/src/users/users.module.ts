import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // create the repository for User
  controllers: [UsersController, AuthController],
  providers: [UsersService]
})
export class UsersModule {}
