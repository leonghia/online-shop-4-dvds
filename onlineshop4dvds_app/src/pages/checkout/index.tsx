import { MoMo, Stripe } from "@/components/icons/brands";
import PageLayout from "@/components/layouts/page-layout";
import { Input, RadioGroup, Radio, cn, RadioProps, useRadio, VisuallyHidden, Image, CheckboxGroup, Checkbox } from "@nextui-org/react";
import { ReactNode } from "react";
import { FaCreditCard } from "react-icons/fa6";

interface RadioPropsWithIcon extends RadioProps {
    icon: ReactNode;
}

export const MethodRadio = (props: RadioPropsWithIcon) => {
    const {
        Component,
        children,
        isSelected,
        description,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
    } = useRadio(props);

    return (
        <Component
            {...getBaseProps()}
            className={cn(
                "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
                "max-w-[300px] cursor-pointer !border-medium border-default-100 rounded-lg gap-4 p-4 bg-content2 dark:bg-content1",
                "data-[selected=true]:border-primary",
            )}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <span {...getWrapperProps()}>
                <span {...getControlProps()} />
            </span>
            <div className="flex w-full items-center gap-2">
                <div className="item-center flex rounded-small p-1">
                    {props.icon}
                </div>
                <div {...getLabelWrapperProps()} className="flex flex-col gap-1">
                    {children && <span {...getLabelProps()} className="text-small">{children}</span>}
                    {description && (
                        <span className="text-tiny text-default-400">{description}</span>
                    )}
                </div>
            </div>

        </Component>
    );
};

export default function CheckoutPage() {
    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-extrabold">Checkout</h1>

                        </div>
                        <form className="flex flex-col gap-8 py-8">
                            <div className="flex flex-col gap-4">
                                <span className="relative text-foreground-500">
                                    Shipping Information
                                </span>

                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="First name" placeholder="Enter your first name" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Last name" placeholder="Enter your last name" isRequired labelPlacement="outside" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="Address" placeholder="Lane 1, Street 1" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Apt, suite, etc." placeholder="Apartment, studio, or floor" labelPlacement="outside" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="City" placeholder="Enter your city" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Country" placeholder="Select country" isRequired labelPlacement="outside" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="Postal code" placeholder="12345" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Phone number" placeholder="+1 (555) 555-5555" isRequired labelPlacement="outside" />
                                </div>
                            </div>
                            <RadioGroup
                                label="Address type"
                                color="primary"
                                orientation="horizontal"
                                classNames={{ wrapper: "gap-8" }}
                            >
                                <Radio value="home" description="All Day Delivery">
                                    Home
                                </Radio>
                                <Radio value="office" description="Delivery Between 9AM - 6PM">
                                    Office
                                </Radio>
                            </RadioGroup>
                            <RadioGroup label="Payment Method" orientation="horizontal" classNames={{ wrapper: "gap-3" }}>
                                <MethodRadio description="Pay with MoMo" value="momo" icon={<MoMo className="h-6" />}>
                                    MoMo
                                </MethodRadio>
                                <MethodRadio description="Pay with VNPAY" value="vnpay" icon={<Image src="https://i.ibb.co/0rV11HV/vnpay-qr-logo.png" className="h-6" removeWrapper alt="VNPAY logo" radius="none" />}>
                                    VNPAY
                                </MethodRadio>
                                <MethodRadio description="Pay with Stripe" value="stripe" icon={<Stripe className="h-5" />}>
                                    Stripe
                                </MethodRadio>
                            </RadioGroup>
                            <div className="flex flex-col gap-4">
                                <Input type="number" label="Card number" placeholder="Card number" labelPlacement="outside" startContent={<FaCreditCard className="text-default-400 mr-1" />} endContent={
                                    <div className="flex max-w-[140px] items-center">
                                        <Input type="number" name="card-month" placeholder="MM" min={0} minLength={0} max={12} maxLength={2} size="sm" classNames={{input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent"}} />
                                        <span className="mx-1 text-default-300">/</span>
                                        <Input type="number" name="card-year" placeholder="YY" min={0} minLength={0} max={99} maxLength={2} size="sm" classNames={{input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent"}} />
                                        <Input type="number" name="card-cvc" placeholder="CVC" min={0} minLength={0} max={999} maxLength={3} size="sm" classNames={{input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent"}} />                                   
                                  </div>
                                  
                                } />
                                <Input type="text" label="Cardholder name" placeholder="Cardholder name" labelPlacement="outside" />
                            </div>
                            <CheckboxGroup label="Billing address">
                                <Checkbox value="true">Same as shipping address</Checkbox>
                            </CheckboxGroup>
                        </form>
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