import CheckoutForm from "@/components/checkout-form";
import PageLayout from "@/components/layouts/page-layout";

export default function CheckoutPage() {
    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-extrabold">Checkout</h1>
                            <CheckoutForm />
                        </div>
                        
                    </div>
                    <div className="w-full rounded-medium bg-content2 px-2 py-4 dark:bg-content1 md:px-6 md:py-8 lg:w-[340px] lg:flex-none">
                        <div>
                            <h2 className="font-medium text-default-500">Your Order</h2>
                            <hr
                                className="shrink-0 bg-divider border-none w-full h-divider mt-4"
                                role="separator"
                            />
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul>
                                <li className="flex items-center gap-x-4 border-divider py-4" id={1}>
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                        <div
                                            className="relative shadow-black/5 shadow-none rounded-large"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            {" "}
                                            <img
                                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/1.png"
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                alt="Training shoes"
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h4 className="text-small">
                                            <a
                                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                tabIndex={0}
                                                role="link"
                                                href="#"
                                            >
                                                Training shoes
                                            </a>
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <p>
                                                <span className="text-small text-default-500">Color: </span>
                                                <span className="text-small font-medium capitalize text-default-700">
                                                    black
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text-small text-default-500">Size: </span>
                                                <span className="text-small font-medium text-default-700">
                                                    42
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-small font-semibold text-default-700">
                                                $49.99
                                            </span>
                                            <span className="text-small text-default-500">x 1</span>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover h-7 w-7 min-w-[1.5rem]"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--lucide"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 6L6 18M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center gap-x-4 border-divider py-4" id={2}>
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                        <div
                                            className="relative shadow-black/5 shadow-none rounded-large"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            {" "}
                                            <img
                                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/2.png"
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                alt="Sneakers"
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h4 className="text-small">
                                            <a
                                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                tabIndex={0}
                                                role="link"
                                                href="#"
                                            >
                                                Sneakers
                                            </a>
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <p>
                                                <span className="text-small text-default-500">Color: </span>
                                                <span className="text-small font-medium capitalize text-default-700">
                                                    red
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text-small text-default-500">Size: </span>
                                                <span className="text-small font-medium text-default-700">
                                                    42
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-small font-semibold text-default-700">
                                                $29.99
                                            </span>
                                            <span className="text-small text-default-500">x 1</span>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover h-7 w-7 min-w-[1.5rem]"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--lucide"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 6L6 18M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center gap-x-4 border-divider py-4" id={3}>
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                        <div
                                            className="relative shadow-black/5 shadow-none rounded-large"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            {" "}
                                            <img
                                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/3.png"
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                alt="Running shoes"
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h4 className="text-small">
                                            <a
                                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                tabIndex={0}
                                                role="link"
                                                href="#"
                                            >
                                                Running shoes
                                            </a>
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <p>
                                                <span className="text-small text-default-500">Color: </span>
                                                <span className="text-small font-medium capitalize text-default-700">
                                                    blue
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text-small text-default-500">Size: </span>
                                                <span className="text-small font-medium text-default-700">
                                                    42
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-small font-semibold text-default-700">
                                                $39.99
                                            </span>
                                            <span className="text-small text-default-500">x 2</span>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover h-7 w-7 min-w-[1.5rem]"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--lucide"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 6L6 18M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                            <div>
                                <form className="mb-4 mt-6 flex items-end gap-2">
                                    <div
                                        className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                                        data-slot="base"
                                        data-filled="true"
                                        data-filled-within="true"
                                        data-has-elements="true"
                                        data-has-label="true"
                                    >
                                        <div data-slot="main-wrapper" className="h-full flex flex-col">
                                            <div
                                                data-slot="input-wrapper"
                                                className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 border-medium border-default-200 data-[hover=true]:border-default-400 h-unit-10 min-h-unit-10 rounded-medium transition-background !duration-150 group-data-[focus=true]:border-primary transition-colors motion-reduce:transition-none bg-background"
                                                style={{ cursor: "text" }}
                                            >
                                                <label
                                                    data-slot="label"
                                                    className="absolute pointer-events-none origin-top-left subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden text-default-700"
                                                    id="react-aria1714968914-:r2u:"
                                                    htmlFor="react-aria1714968914-:r2t:"
                                                >
                                                    Coupon code
                                                </label>
                                                <div
                                                    data-slot="inner-wrapper"
                                                    className="inline-flex w-full items-center h-full box-border"
                                                >
                                                    <input
                                                        data-slot="input"
                                                        className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small h-full"
                                                        aria-label="Coupon code"
                                                        placeholder="Enter coupon code"
                                                        id="react-aria1714968914-:r2t:"
                                                        aria-labelledby="react-aria1714968914-:r2t: react-aria1714968914-:r2u:"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground data-[hover=true]:opacity-hover"
                                        type="submit"
                                    >
                                        Apply
                                    </button>
                                </form>
                                <dl className="flex flex-col gap-4 py-4">
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Subtotal</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $159.96
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Delivery</dt>
                                        <dd className="text-small font-semibold text-default-700">$0.00</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Tax</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $23.99
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Discount</dt>
                                        <dd className="text-small font-semibold text-success"> - $10.99</dd>
                                    </div>
                                    <hr
                                        className="shrink-0 bg-divider border-none w-full h-divider"
                                        role="separator"
                                    />
                                    <div className="flex justify-between">
                                        <dt className="text-small font-semibold text-default-500">Total</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $172.96
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-small w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover"
                                type="button"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </PageLayout>
    );
}