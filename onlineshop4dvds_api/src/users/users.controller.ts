import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from "../interceptors/serialize.interceptor";
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @UseInterceptors(SerializeInterceptor)
    @Get("/:id")
    async get(@Param("id") id: string) {
        
    }
}
