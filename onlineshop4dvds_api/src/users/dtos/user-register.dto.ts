import { IsEmail, IsString, Length } from "class-validator";

export class UserRegisterDto {
    
    @IsString()
    @Length(3, 64)
    fullName: string;

    @IsEmail()
    email: string;

    @IsString()
    @Length(6, 64)
    password: string;
}