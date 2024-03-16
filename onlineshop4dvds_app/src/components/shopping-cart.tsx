import { useCart } from "@/contexts/cart-context";
import { Button, Input, Image } from "@nextui-org/react";
import { FaXmark } from "react-icons/fa6";

export default function ShoppingCart() {
    const cart = useCart();

    return (
        <section className="flex max-w-5xl w-full h-full gap-8 justify-center">
            <div className="w-full flex-none py-4 lg:w-1/2">
                <div className="flex h-full flex-1 flex-col p-4">
                    <form
                        className="flex flex-col gap-3"
                        style={{ zIndex: 1, opacity: 1, transform: "none" }}
                    >
                        <h1 className="text-2xl font-extrabold">Shopping cart</h1>
                        <div>
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul>
                                {cart?.items.map(item => (
                                    <li
                                        className="flex items-center gap-x-4 border-divider py-4"
                                        key={item.id}
                                    >
                                        <Image alt={item.title} src={item.thumbnailUrl} className="w-20 h-20" />
                                        <div className="flex flex-1 flex-col">
                                            <h4 className="text-small">
                                                <a
                                                    className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                    tabIndex={0}
                                                    role="link"
                                                    href="#"
                                                >
                                                    {item.title}
                                                </a>
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
                                                <span className="text-small text-default-500">x {item.quantity}</span>
                                            </div>
                                        </div>
                                        <Button isIconOnly color="secondary" aria-label="Drop" size="sm" radius="full">
                                            <FaXmark className="w-3 h-3 text-foreground" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <div className="mb-4 mt-6 flex items-end gap-2">
                                    <Input type="text" label="Coupon code" placeholder="Enter coupon code" variant="bordered" labelPlacement="outside" />
                                    <Button color="default" className="font-medium">Apply</Button>
                                </div>
                                <dl className="flex flex-col gap-4 py-4">
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Subtotal</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $159.96
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Discount</dt>
                                        <dd className="text-small font-semibold text-success">
                                            {" "}
                                            - $0.00
                                        </dd>
                                    </div>
                                    <hr
                                        className="shrink-0 bg-divider border-none w-full h-divider"
                                        role="separator"
                                    />
                                    <div className="flex justify-between">
                                        <dt className="text-small font-semibold text-default-500">
                                            Total
                                        </dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $172.96
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </form>
                    <Button color="primary" className="font-medium mt-10" size="lg" fullWidth>Check out</Button>
                </div>
            </div>
        </section>
    );
}