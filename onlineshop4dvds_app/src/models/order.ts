import { OrderStatus } from "@/utils/order";
import { PaymentMethod } from "@/utils/payment";

export interface OrderCreate {
    userSub: string;
    orderId: string;
    shippingFee: number;
    discount: number;
    paymentMethod: PaymentMethod
    items: OrderItemCreate[];
}

export interface OrderItemCreate {
    productId: number;
    quantity: number;
}

export interface Order {
   id: number;
   createdAt: string;
   orderId: string;
   status: OrderStatus;
   subtotal: number;
   shippingFee: number;
   discount: number;
   paymentMethod: string;
   items: OrderItem[];
}

export interface OrderItem {
    title: string;
    price: number;
    quantity: number;
    thumbnailUrl: string;
    type: string;
    productId: number;
}
