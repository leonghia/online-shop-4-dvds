export interface Cart {
    id: number;
    items: CartItem[];
}

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnailUrl: string;
    type: string;
    stock: number;
}