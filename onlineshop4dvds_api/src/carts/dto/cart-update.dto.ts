import { IsNumber } from "class-validator";

export class CartUpdateDto {

    @IsNumber()
    public productId: number;

    @IsNumber()
    public quantity: number;
}