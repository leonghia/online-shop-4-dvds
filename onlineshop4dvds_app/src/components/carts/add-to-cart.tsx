import { API_URL } from "@/config";
import { useCart, useCartDispatch } from "@/contexts/cart-context";
import { Cart, CartCreate, CartItemUpdate } from "@/models/cart";
import { useCookies } from "react-cookie";
import { Children, ReactElement, ReactNode, cloneElement } from "react";

export default function AddToCart({productId, children}: {productId: number, children: ReactNode}) {
    const cart = useCart();
    const cartDispatch = useCartDispatch();
    const [cookies, setCookie] = useCookies(['cartId']);

    const handleAddToCart = (productId: number) => {
        if (!cookies.cartId) {
            const payload: CartCreate = {productId};
            fetch(`${API_URL}/cart`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            })
            .then(res => res.json())
            .then((data: Cart) => {
                cartDispatch && cartDispatch({payload: data});
                setCookie("cartId", data.id, {path: "/", maxAge: 604800});
            })
            .catch(err => console.error(err));
        } else {
            if (!cart) return;
            const item = cart.items.find(cp => cp.productId === productId);
            let quantity: number;
            if (!item) quantity = 1;
            else quantity = item.quantity + 1;
            const payload: CartItemUpdate = {productId, quantity};
            fetch(`${API_URL}/cart/${cart.id}/items`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            })
            .then(res => res.json())
            .then((data: Cart) => cartDispatch && cartDispatch({payload: data}))
            .catch(err => console.error(err));
        }
    }

    const child = Children.toArray(children)[0] as ReactElement;
    if (child) return cloneElement(child, {onPress: () => handleAddToCart(productId)});
    return null;
}