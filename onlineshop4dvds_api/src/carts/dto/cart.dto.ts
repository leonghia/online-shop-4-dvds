import { CartItemDto } from "./cart-item.dto";

export interface CartDto {
    id: number;
    items: CartItemDto[];
}