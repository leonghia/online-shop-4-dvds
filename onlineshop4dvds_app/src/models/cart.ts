export interface Cart {
    items: CartItem[];
    subtotal: number;
}

export interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnailUrl: string;
    type: string;
    stock: number;

}

export interface CartItemUpdate {
    productId: number;
    quantity: number;
}

export interface CartCreate {
    productId: number;
}

export interface ClientCart {
    items: ClientCartItem[];
}

export interface ClientCartItem {
    productId: number;
    quantity: number;
}