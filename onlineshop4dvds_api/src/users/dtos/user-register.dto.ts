import { IsEmail, IsString } from "class-validator";

export class UserRegisterDto {
    
    @IsString()
    fullName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}