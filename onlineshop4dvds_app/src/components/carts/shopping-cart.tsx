import { API_URL } from "@/config";
import { CartItem, ClientCart } from "@/models/cart";
import { Button, Input, Image, Link } from "@nextui-org/react";
import { FaXmark, FaMinus, FaPlus } from "react-icons/fa6";
import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactNode, useEffect, useState } from "react";
import { useClientCart, useClientCartDispatch } from "@/contexts/client-cart-context";

let isLoaded = false;

export default function ShoppingCart() {
    const { user, error, isLoading } = useUser();
    const clientCart = useClientCart();
    const dispatch = useClientCartDispatch();
    const [items, setItems] = useState<CartItem[] | null>(null);

    useEffect(() => {
        if (!clientCart || isLoaded) return;
        fetch(`${API_URL}/cart-item?id=${clientCart!.items.map(i => i.productId).join(",")}`)
            .then(res => res.json())
            .then((items: CartItem[]) => {
                setItems(items);
                isLoaded = true;
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
            dispatch && dispatch({payload: null});
        }

    };

    let checkoutButton: ReactNode;

    if (user) {
        checkoutButton = <Button color="primary" className="font-medium mt-10" size="lg" as={Link} href="/checkout">Check out</Button>;
    } else {
        const returnLink = `/api/auth/login?returnTo=${encodeURIComponent("/checkout")}`;
        checkoutButton = <a href={returnLink}><Button color="primary" className="font-medium mt-10" size="lg">Check out</Button></a>;
    }

    return (
        <div className="w-full flex-none py-4">
            <div className="flex h-full flex-1 flex-col p-4">
                <form
                    className="flex flex-col gap-3"
                    style={{ zIndex: 1, opacity: 1, transform: "none" }}
                >
                    <h1 className="text-2xl font-extrabold">Shopping cart</h1>
                    <div>
                        <h3 className="sr-only">Items in your cart</h3>
                        <ul>
                            {items?.map(item => (
                                <li
                                    className="flex justify-between items-center border-divider py-4"
                                    key={item.id}
                                >
                                    <div className="flex gap-x-4 flex-1 max-w-sm">
                                        <Image src={item.thumbnailUrl} removeWrapper classNames={{ img: "w-24 h-24 object-contain" }} alt={item.title} />
                                        <div className="flex flex-col">
                                            <h4 className="text-medium font-semibold">
                                                {item.title}
                                            </h4>
                                            <div className="flex items-center gap-3">
                                                <p>
                                                    <span className="text-small text-default-500">Type: </span>
                                                    <span className="text-small font-medium capitalize text-default-700">
                                                        {item.type}
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="text-small text-default-500">Stock: </span>
                                                    <span className="text-small font-medium text-default-700">
                                                        {item.stock}
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className="text-small font-semibold text-pink-500">
                                                    ${item.price}
                                                </span>
                                                <span className="text-small text-default-500">x {clientCart?.items.find(i => i.productId == item.id)?.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <Button isIconOnly aria-label="Decrease quantity" variant="light" onPress={() => handleDecrease(item.id)}>
                                            <FaMinus className="w-3 h-3" />
                                        </Button>
                                        <Input type="number" isReadOnly variant="bordered" value={clientCart?.items.find(i => i.productId == item.id)?.quantity.toString()} className="max-w-20" classNames={{ base: "bg-background" }} />
                                        <Button isIconOnly aria-label="Increase quantity" variant="light" onPress={() => handleIncrease(item.id)}>
                                            <FaPlus className="w-3 h-3" />
                                        </Button>
                                    </div>
                                    <Button isIconOnly color="secondary" aria-label="Drop" size="sm" radius="full" onPress={() => handleDrop(item.id)}>
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
                                        ${items?.reduce((acc, cur) => {
                                            console.log(clientCart?.items);
                                            console.log(cur);
                                            return acc + cur.price * (clientCart?.items.find(i => i.productId == cur.id))!.quantity;
                                        }, 0).toFixed(2)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </form>
                <div className="w-full h-auto flex justify-end">
                    {checkoutButton}
                </div>
            </div>
        </div>
    );
}