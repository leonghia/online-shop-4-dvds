import { API_URL } from "@/config";
import { useClientCart } from "@/contexts/client-cart-context";
import { CartItem } from "@/models/cart";
import { Button, Input, Image } from "@nextui-org/react";
import { ReactElement, useEffect, useState } from "react";

export default function OrderSummary({ onPay }: { onPay: Function }) {
    const clientCart = useClientCart();
    const [discount, setDiscount] = useState(0);
    const [itemsMap, setItemsMap] = useState<Map<number, CartItem> | null>(null);
    const [shippingFee, setShippingFee] = useState(0);

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

    let markup: ReactElement = <div></div>;

    if (clientCart && itemsMap) {
        const subtotal = clientCart.items.reduce((acc, cur) => acc + cur.quantity * itemsMap.get(cur.productId)!.price , 0);
        markup = (
            <div>
                <h2 className="font-medium text-default-500">Order Summary</h2>
                <hr
                    className="shrink-0 bg-divider border-none w-full h-divider mt-4"
                    role="separator"
                />
                <h3 className="sr-only">Items in your cart</h3>
                <ul>
                    {clientCart.items.map(item => (
                        <li key={item.productId} className="flex items-center gap-x-4 border-divider py-4">
                            <Image src={itemsMap.get(item.productId)?.thumbnailUrl} removeWrapper classNames={{ img: "w-20 h-20 object-contain" }} alt={itemsMap.get(item.productId)?.title} />
                            <div className="flex flex-1 flex-col">
                                <h4 className="text-small font-semibold">
                                    {itemsMap.get(item.productId)?.title}
                                </h4>
                                <div className="flex items-center gap-3">
                                    <p>
                                        <span className="text-xs text-default-500">Type: </span>
                                        <span className="text-xs font-medium capitalize text-default-700">
                                            {itemsMap.get(item.productId)?.type}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="text-xs text-default-500">Stock: </span>
                                        <span className="text-xs font-medium text-default-700">
                                            {itemsMap.get(item.productId)?.stock}
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-small font-semibold text-pink-500">
                                        ${itemsMap.get(item.productId)?.price}
                                    </span>
                                    <span className="text-small text-default-500">x {item.quantity}</span>
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
                <div>
                    <form className="mb-4 mt-6 flex items-end gap-2">
                        <Input type="text" label="Coupon code" placeholder="Enter coupon code" labelPlacement="outside" variant="faded" classNames={{ inputWrapper: "bg-background" }} />
                        <Button color="default" className="font-medium">Apply</Button>
                    </form>
                    <dl className="flex flex-col gap-4 py-4">
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Subtotal</dt>
                            <dd className="text-small font-semibold text-default-700">
                                ${subtotal.toFixed(2)}
                            </dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Shipping</dt>
                            <dd className="text-small font-semibold text-default-700">${shippingFee.toFixed(2)}</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Discount</dt>
                            <dd className="text-small font-semibold text-default-700">${discount.toFixed(2)}</dd>
                        </div>
                        <hr
                            className="shrink-0 bg-divider border-none w-full h-divider"
                            role="separator"
                        />
                        <div className="flex justify-between">
                            <dt className="text-small font-semibold text-default-500">Total</dt>
                            <dd className="text-small font-semibold text-pink-500">${(subtotal + shippingFee - discount).toFixed(2)}</dd>
                        </div>
                    </dl>
                </div>
                <div className="mt-4">
                    <Button color="primary" className="font-medium" fullWidth onPress={(e) => onPay()}>Pay now</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full rounded-medium bg-content2 px-2 py-4 dark:bg-content1 md:px-6 md:py-8 lg:w-[340px] lg:flex-none">
            {markup}
        </div>
    );
}