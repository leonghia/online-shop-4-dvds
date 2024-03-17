export interface Cart {
    id: number;
    items: CartItem[];
    subtotal: number;
    discount: number;
    total: number;
}

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnailUrl: string;
    type: string;
    stock: number;
    productId: number;
}

export interface CartUpdateDto {
    productId: number;
    quantity: number;
}