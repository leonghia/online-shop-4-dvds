import { IsDateString, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class SongCreateDto {
    @IsString()
    @MinLength(1)
    @MaxLength(256)
    public title: string;

    @IsNumber()
    @Min(0)
    public artistId: number;

    @IsDateString()
    public released: Date;

    @IsNumber()
    @Min(0)
    public minutes: number;

    @IsNumber()
    @Min(0)
    public seconds: number;

    @IsNumber(undefined, {each: true})
    public genresIds: number[];

    @IsOptional()
    @IsNumber()
    @Min(0)
    public albumId: number | undefined | null;
}