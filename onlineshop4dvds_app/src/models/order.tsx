import { OrderStatus } from "@/utils/order";
import { PaymentMethod } from "@/utils/payment";

export interface OrderCreate {
    userSub: string;
    orderId: string;
    cartId: number;
    shippingFee: number;
    discount: number;
    paymentMethod: PaymentMethod;
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