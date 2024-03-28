import { API_URL } from "@/config";
import { useClientCart } from "@/contexts/client-cart-context";
import { CartItem } from "@/models/cart";
import { useEffect, useState } from "react";

export default function useItems() {
    const clientCart = useClientCart();
    const [itemsMap, setItemsMap] = useState<Map<number, CartItem> | null>(null);

    useEffect(() => {
        if (!clientCart || itemsMap) return;
        fetch(`${API_URL}/cart-item?id=${clientCart!.items.map(i => i.productId).join(",")}`)
            .then(res => res.json())
            .then((cartItems: CartItem[]) => {
                const map = new Map();
                for (const item of cartItems) {
                    map.set(item.id, item);
                }
                setItemsMap(map);
            })
            .catch(err => console.error(err));
    }, [clientCart]);

    return itemsMap;
}