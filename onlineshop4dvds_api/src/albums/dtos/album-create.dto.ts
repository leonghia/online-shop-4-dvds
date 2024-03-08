import { IsDateString, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class AlbumCreateDto {

    @IsString()
    @MinLength(1)
    @MaxLength(256)
    title: string;

    @IsDateString()
    released: Date;

    @IsNumber(undefined, {each: true})
    genres: number[];

    @IsNumber(undefined, {each: true})
    artists: number[];
}