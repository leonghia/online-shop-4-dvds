import { ClientCart, ClientCartItem } from "@/models/cart";
import { useCookies } from "react-cookie";
import { Children, ReactElement, ReactNode, cloneElement } from "react";
import { useClientCart, useClientCartDispatch } from "@/contexts/client-cart-context";

export default function AddToCart({productId, children}: {productId: number, children: ReactNode}) {
    const cart = useClientCart();
    const cartDispatch = useClientCartDispatch();
    const [cookies, setCookie] = useCookies(['cartId']);

    const handleAddToCart = (productId: number) => {
        // If there is no cart in local
        if (!localStorage.getItem("cart")) {
            const newCart: ClientCart = {
                items: [{productId, quantity: 1}]
            }
            cartDispatch && cartDispatch({payload: newCart});
            localStorage.setItem("cart", JSON.stringify(newCart));
        } else {
        // If there is a cart
        const clientCart: ClientCart = JSON.parse(localStorage.getItem("cart")!);
        // If this product is not in the cart yet
            const cartItem = clientCart.items.find(i => i.productId === productId);
            if (!cartItem) {
                const updatedItems: ClientCartItem[] = [...clientCart.items, {productId, quantity: 1}];
                const updatedCart: ClientCart = {items: updatedItems};
                cartDispatch && cartDispatch({payload: {items: updatedItems}});
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return;
            }
            // If this product is already in the cart
            const updatedItems = clientCart.items.map(item => {
                if (item.productId == productId) return {productId, quantity: cartItem.quantity + 1} as ClientCartItem;
                else return item;
            });
            const updatedCart: ClientCart = {items: updatedItems};
            cartDispatch && cartDispatch({payload: {items: updatedItems}});
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
        
    }

    const child = Children.toArray(children)[0] as ReactElement;
    if (child) return cloneElement(child, {onPress: () => handleAddToCart(productId)});
    return null;
}