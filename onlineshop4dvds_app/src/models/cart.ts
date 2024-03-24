export interface Cart {
    id: number;
    items: CartItem[];
    subtotal: number;
}

export interface CartItem {
    title: string;
    price: number;
    quantity: number;
    thumbnailUrl: string;
    type: string;
    stock: number;
    productId: number;
}

export interface CartItemUpdate {
    productId: number;
    quantity: number;
}

export interface CartCreate {
    productId: number;
}