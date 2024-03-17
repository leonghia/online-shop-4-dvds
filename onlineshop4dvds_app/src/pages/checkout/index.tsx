import { MoMo } from "@/components/icons/brands";
import PageLayout from "@/components/layouts/page-layout";
import { Input, RadioGroup, Radio, cn, RadioProps, useRadio, VisuallyHidden } from "@nextui-org/react";

export const MethodRadio = (props: RadioProps) => {
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
            <div className="flex w-full items-center gap-3">
                <div className="item-center flex rounded-small p-1">
                    <MoMo className="h-6" />
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
                            <RadioGroup label="Payment Method" orientation="horizontal" classNames={{wrapper: "gap-3"}}>
                                <MethodRadio description="Pay with MoMo" value="momo">
                                    MoMo
                                </MethodRadio>
                                <MethodRadio description="Pay with VNPAY" value="vnpay">
                                    VNPAY
                                </MethodRadio>
                                <MethodRadio
                                    description="Pay with Stripe"
                                    value="stripe"
                                >
                                    Stripe
                                </MethodRadio>
                            </RadioGroup>
                            <div className="flex flex-col gap-4">
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
                                            className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background"
                                            style={{ cursor: "text" }}
                                        >
                                            <label
                                                data-slot="label"
                                                className="absolute pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                                                id="react-aria1714968914-:r28:"
                                                htmlFor="react-aria1714968914-:r27:"
                                            >
                                                Email address
                                            </label>
                                            <div
                                                data-slot="inner-wrapper"
                                                className="inline-flex w-full items-center h-full box-border"
                                            >
                                                <input
                                                    data-slot="input"
                                                    className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full"
                                                    aria-label="Email address"
                                                    placeholder="Enter address"
                                                    id="react-aria1714968914-:r27:"
                                                    aria-labelledby="react-aria1714968914-:r27: react-aria1714968914-:r28:"
                                                    type="email"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                            className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background"
                                            style={{ cursor: "text" }}
                                        >
                                            <label
                                                data-slot="label"
                                                className="absolute pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                                                id="react-aria1714968914-:r2d:"
                                                htmlFor="react-aria1714968914-:r2c:"
                                            >
                                                Card number
                                            </label>
                                            <div
                                                data-slot="inner-wrapper"
                                                className="inline-flex w-full items-center h-full box-border"
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        aria-hidden="true"
                                                        role="img"
                                                        className="text-default-400 iconify iconify--solar"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <defs>
                                                            <mask id="iconifyReact0">
                                                                <g fill="none">
                                                                    <path
                                                                        fill="#fff"
                                                                        d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.442 0-.858-.002-1.25H2.002C2 11.142 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20"
                                                                    />
                                                                    <path
                                                                        fill="#000"
                                                                        fillRule="evenodd"
                                                                        d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </g>
                                                            </mask>
                                                        </defs>
                                                        <path
                                                            fill="currentColor"
                                                            d="M0 0h24v24H0z"
                                                            mask="url(#iconifyReact0)"
                                                        />
                                                    </svg>
                                                </span>
                                                <input
                                                    data-slot="input"
                                                    data-has-start-content="true"
                                                    data-has-end-content="true"
                                                    className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full"
                                                    aria-label="Card number"
                                                    minLength={0}
                                                    placeholder="Card number"
                                                    id="react-aria1714968914-:r2c:"
                                                    aria-labelledby="react-aria1714968914-:r2c: react-aria1714968914-:r2d:"
                                                    type="number"
                                                    defaultValue=""
                                                    name="card-number"
                                                />
                                                <div className="flex max-w-[140px] items-center">
                                                    <input
                                                        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                                                        min={0}
                                                        minLength={0}
                                                        max={12}
                                                        maxLength={2}
                                                        placeholder="MM"
                                                        type="number"
                                                        name="card-month"
                                                    />
                                                    <span className="mx-1 text-default-300">/</span>
                                                    <input
                                                        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                                                        min={0}
                                                        minLength={0}
                                                        max={99}
                                                        maxLength={2}
                                                        placeholder="YY"
                                                        type="number"
                                                        name="card-year"
                                                    />
                                                    <input
                                                        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                                                        min={0}
                                                        minLength={0}
                                                        max={999}
                                                        maxLength={3}
                                                        placeholder="CVC"
                                                        type="number"
                                                        name="card-cvc"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                            className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background"
                                            style={{ cursor: "text" }}
                                        >
                                            <label
                                                data-slot="label"
                                                className="absolute pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                                                id="react-aria1714968914-:r2i:"
                                                htmlFor="react-aria1714968914-:r2h:"
                                            >
                                                Cardholder name
                                            </label>
                                            <div
                                                data-slot="inner-wrapper"
                                                className="inline-flex w-full items-center h-full box-border"
                                            >
                                                <input
                                                    data-slot="input"
                                                    className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full"
                                                    aria-label="Cardholder name"
                                                    placeholder="Cardholder name"
                                                    id="react-aria1714968914-:r2h:"
                                                    aria-labelledby="react-aria1714968914-:r2h: react-aria1714968914-:r2i:"
                                                    type="text"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="mt-4">
                                <legend className="pb-2 text-foreground-500">Billing address</legend>
                                <label
                                    className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
                                    data-selected="true"
                                >
                                    <div
                                        style={{
                                            border: 0,
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: 1,
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: 0,
                                            position: "absolute",
                                            width: 1,
                                            whiteSpace: "nowrap"
                                        }}
                                    >
                                        <input
                                            aria-label="Same as shipping address"
                                            aria-labelledby=":r2m:"
                                            type="checkbox"
                                            defaultValue=""
                                            defaultChecked=""
                                        />
                                    </div>
                                    <span
                                        aria-hidden="true"
                                        className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 mr-2 rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)] after:rounded-[calc(theme(borderRadius.medium)*0.6)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            role="presentation"
                                            viewBox="0 0 17 18"
                                            className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity motion-reduce:transition-none"
                                        >
                                            <polyline
                                                fill="none"
                                                points="1 9 7 14 15 4"
                                                stroke="currentColor"
                                                strokeDasharray={22}
                                                strokeDashoffset={44}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                style={{ transition: "stroke-dashoffset 250ms linear 0.2s" }}
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        id=":r2m:"
                                        className="relative text-foreground select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none"
                                    >
                                        Same as shipping address
                                    </span>
                                </label>
                                <span
                                    aria-hidden="true"
                                    className="w-px h-px block"
                                    style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}
                                />
                            </fieldset>
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