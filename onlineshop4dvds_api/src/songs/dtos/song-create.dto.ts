import { IsDateString, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class SongCreateDto {
    @IsString()
    @MinLength(1)
    @MaxLength(256)
    title: string;

    @IsNumber()
    @Min(0)
    artistId: number;

    @IsDateString()
    released: Date;

    @IsNumber()
    @Min(0)
    minutes: number;

    @IsNumber()
    @Min(0)
    seconds: number;

    @IsNumber(undefined, {each: true})
    genresIds: number[];

    @IsOptional()
    @IsNumber()
    @Min(0)
    albumId: number | undefined | null;
}