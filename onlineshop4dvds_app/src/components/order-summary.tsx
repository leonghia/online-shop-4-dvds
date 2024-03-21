import { useCart } from "@/contexts/cart-context";
import { Button, Input, Image } from "@nextui-org/react";
import { useState } from "react";

export default function OrderSummary({ onPay }: { onPay: Function }) {
    const cart = useCart();
    const [discount, setDiscount] = useState(0);

    return (
        <div className="w-full rounded-medium bg-content2 px-2 py-4 dark:bg-content1 md:px-6 md:py-8 lg:w-[340px] lg:flex-none">
            <div>
                <h2 className="font-medium text-default-500">Order Summary</h2>
                <hr
                    className="shrink-0 bg-divider border-none w-full h-divider mt-4"
                    role="separator"
                />
                <h3 className="sr-only">Items in your cart</h3>
                <ul>
                    {cart?.items?.map(item => (
                        <li key={item.productId} className="flex items-center gap-x-4 border-divider py-4">
                            <Image src={item.thumbnailUrl} removeWrapper classNames={{ img: "w-20 h-20 object-contain" }} alt={item.title} />
                            <div className="flex flex-1 flex-col">
                                <h4 className="text-small font-semibold">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-3">
                                    <p>
                                        <span className="text-xs text-default-500">Type: </span>
                                        <span className="text-xs font-medium capitalize text-default-700">
                                            {item.type}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="text-xs text-default-500">Stock: </span>
                                        <span className="text-xs font-medium text-default-700">
                                            {item.stock}
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-small font-semibold text-pink-500">
                                        ${item.price}
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
                                ${cart?.subtotal.toFixed(2)}
                            </dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Shipping</dt>
                            <dd className="text-small font-semibold text-default-700">N/A</dd>
                        </div>
                        <div className="flex justify-between">
                            <dt className="text-small text-default-500">Discount</dt>
                            <dd className="text-small font-semibold text-default-700">${discount || 0.00.toFixed(2)}</dd>
                        </div>
                        <hr
                            className="shrink-0 bg-divider border-none w-full h-divider"
                            role="separator"
                        />
                        <div className="flex justify-between">
                            <dt className="text-small font-semibold text-default-500">Total</dt>
                            <dd className="text-small font-semibold text-pink-500">${cart?.subtotal.toFixed(2)}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="mt-4">
                <Button color="primary" className="font-medium" fullWidth onPress={() => onPay(cart?.subtotal)}>Pay now</Button>
            </div>
        </div>

    );
}