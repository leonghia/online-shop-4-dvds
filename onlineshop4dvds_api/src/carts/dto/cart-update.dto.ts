import { IsNumber, Min } from "class-validator";

export class CartUpdateDto {

    @IsNumber()
    public productId: number;

    @IsNumber()
    @Min(1)
    public quantity: number;
}