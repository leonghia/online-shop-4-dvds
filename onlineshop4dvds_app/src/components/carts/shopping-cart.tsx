import { API_URL } from "@/config";
import { CartItem, ClientCart } from "@/models/cart";
import { Button, Input, Image, Link, Skeleton } from "@nextui-org/react";
import { FaXmark, FaMinus, FaPlus } from "react-icons/fa6";
import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactNode, useEffect, useState } from "react";
import { useClientCart, useClientCartDispatch } from "@/contexts/client-cart-context";
import { HiMiniShoppingCart } from "react-icons/hi2";

const temp = new Array(4).fill(0);

export default function ShoppingCart() {
    const { user, error, isLoading } = useUser();
    const clientCart = useClientCart();
    const dispatch = useClientCartDispatch();
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

    const handleIncrease = (productId: number) => {
        // We can be sure the cart is present and the product already exists in the cart
        if (!clientCart) return;
        const updatedClientCart: ClientCart = {
            items: clientCart.items.map(item => item.productId === productId ? ({ productId, quantity: item.quantity + 1 }) : item)
        }
        localStorage.setItem("cart", JSON.stringify(updatedClientCart));
        dispatch && dispatch({ payload: updatedClientCart });
    }

    const handleDecrease = (productId: number) => {
        // We can be sure the cart is present and the product already exists in the cart
        if (!clientCart) return;
        // We check if the current quantity = 1, if so, we return immediately since we want the user to explicitly press the drop button if he/she wishes to drop a product from the cart
        const item = clientCart.items.find(item => item.productId == productId)!;
        if (item.quantity === 1) return;
        const updatedClientCart: ClientCart = {
            items: clientCart.items.map(item => item.productId === productId ? ({ productId, quantity: item.quantity - 1 }) : item)
        }
        localStorage.setItem("cart", JSON.stringify(updatedClientCart));
        dispatch && dispatch({ payload: updatedClientCart });
    }

    const handleDrop = (productId: number) => {
        if (!clientCart) return;
        const updatedClientCart: ClientCart = {
            items: clientCart.items.filter(item => item.productId !== productId),
        };
        // We cart.items is empty, we clear the cart from client
        if (updatedClientCart.items.length) {
            localStorage.setItem("cart", JSON.stringify(updatedClientCart));
            dispatch && dispatch({ payload: updatedClientCart });
        } else {
            localStorage.removeItem("cart");
            dispatch && dispatch({ payload: null });
        }

    };

    let checkoutButton: ReactNode;

    if (user) {
        checkoutButton = <Button color="primary" className="font-medium mt-10" size="lg" as={Link} href="/checkout">Check out</Button>;
    } else {
        const returnLink = `/api/auth/login?returnTo=${encodeURIComponent("/checkout")}`;
        checkoutButton = <a href={returnLink}><Button color="primary" className="font-medium mt-10" size="lg">Check out</Button></a>;
    }

    let markup: ReactNode;

    if (clientCart && itemsMap) {
        markup = (
            <div>
                <h3 className="sr-only">Items in your cart</h3>
                <ul>
                    {clientCart?.items?.map(cartItem => (
                        <li
                            className="flex justify-between items-center border-divider py-4"
                            key={cartItem.productId}
                        >
                            <div className="flex gap-x-4 flex-1 max-w-md">
                                <div className="relative flex h-24 max-h-full max-w-24 w-full flex-col items-center justify-center overflow-visible bg-transparent">
                                    <Image src={itemsMap?.get(cartItem.productId)?.thumbnailUrl} removeWrapper classNames={{ img: "max-w-24 w-full max-h-24 h-full object-contain" }} alt={itemsMap?.get(cartItem.productId)?.title} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-medium font-semibold">
                                        {itemsMap?.get(cartItem.productId)?.title}
                                    </h4>
                                    <div className="flex items-center gap-3">
                                        <p>
                                            <span className="text-small text-default-500">Type: </span>
                                            <span className="text-small font-medium capitalize text-default-700">
                                                {itemsMap?.get(cartItem.productId)?.type}
                                            </span>
                                        </p>
                                        <p>
                                            <span className="text-small text-default-500">Stock: </span>
                                            <span className="text-small font-medium text-default-700">
                                                {itemsMap?.get(cartItem.productId)?.stock}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="text-small font-semibold text-pink-500">
                                            ${itemsMap?.get(cartItem.productId)?.price}
                                        </span>
                                        <span className="text-small text-default-500">x {cartItem.quantity}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <Button isIconOnly aria-label="Decrease quantity" variant="light" onPress={() => handleDecrease(cartItem.productId)}>
                                    <FaMinus className="w-3 h-3" />
                                </Button>
                                <Input type="number" isReadOnly variant="bordered" value={cartItem.quantity.toString()} className="max-w-20" classNames={{ base: "bg-background" }} />
                                <Button isIconOnly aria-label="Increase quantity" variant="light" onPress={() => handleIncrease(cartItem.productId)}>
                                    <FaPlus className="w-3 h-3" />
                                </Button>
                            </div>
                            <Button isIconOnly color="secondary" aria-label="Drop" size="sm" radius="full" onPress={() => handleDrop(cartItem.productId)}>
                                <FaXmark className="w-3 h-3 text-foreground" />
                            </Button>
                        </li>
                    ))}
                </ul>
                <div>
                    <dl className="flex flex-col gap-4 py-4">
                        <hr
                            className="shrink-0 bg-divider border-none w-full h-divider"
                            role="separator"
                        />
                        <div className="flex justify-between">
                            <dt className="text-small font-semibold text-default-500">
                                Subtotal
                            </dt>
                            <dd className="text-medium font-semibold text-pink-500">
                                ${itemsMap && clientCart?.items.reduce((acc, cur) => acc + cur.quantity * itemsMap?.get(cur.productId)!.price, 0).toFixed(2)}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="w-full h-auto flex justify-end">
                    {checkoutButton}
                </div>
            </div>

        );
    } else if ((!clientCart && !itemsMap) || (clientCart && !itemsMap)) {
        // display skeletons
        markup = (
            <div>
                <h3 className="sr-only">Items in your cart</h3>
                <ul>
                    {temp.map((p, i) => (
                        <li key={i} className="flex justify-between items-center border-divider py-4">
                            <div className="flex gap-x-4 flex-1 max-w-md">
                                <div className="relative flex h-24 max-h-full max-w-24 w-full flex-col items-center justify-center overflow-visible bg-transparent">
                                    <Skeleton className="rounded-lg w-full h-full" disableAnimation />
                                </div>
                                <div className="flex flex-col grow gap-2">
                                    <Skeleton className="rounded-lg h-6 w-full" disableAnimation />
                                    <Skeleton className="rounded-lg h-6 w-1/2" disableAnimation />
                                    <Skeleton className="rounded-lg h-6 w-1/4" disableAnimation />
                                </div>
                            </div>
                            <div>
                                <Skeleton className="rounded-lg h-10 w-40" disableAnimation />
                            </div>
                            <div>
                                <Skeleton className="rounded-full h-10 w-10" disableAnimation />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        // display empty state
        markup = (
            <div className="rounded-medium border-medium border-dashed border-divider w-full h-80 flex flex-col justify-center items-center">
                <HiMiniShoppingCart className="text-default-400 w-14 h-14" />
                <p className="font-medium text-default-500">Empty cart</p>
            </div>
        );
    }

    return (
        <div className="w-full flex-none py-4">
            <div className="flex h-full flex-1 flex-col p-4">
                <form
                    className="flex flex-col gap-3"
                >
                    <h1 className="text-2xl font-extrabold">Shopping cart</h1>
                    {markup}
                </form>
            </div>
        </div>
    );
}