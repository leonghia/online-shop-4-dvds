import { IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class GameCreateDto {

    @IsString()
    @MinLength(1)
    @MaxLength(256)
    public title: string;

    @IsNumber()
    @Min(1900)
    public releasedYear: number;

    @IsString()
    @MinLength(1)
    @MaxLength(256)
    public publisher: string;

    @IsNumber()
    @Min(0)
    public price: number;

    @IsString()
    @MinLength(1)
    public description: string;

    @IsNumber(undefined, {each: true})
    public genresIds: number[];
}