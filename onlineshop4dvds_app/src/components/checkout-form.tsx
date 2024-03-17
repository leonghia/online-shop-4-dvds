import { MoMo, Stripe } from "@/components/icons/brands";
import { Input, RadioGroup, Radio, Image, CheckboxGroup, Checkbox } from "@nextui-org/react";
import { FaCreditCard } from "react-icons/fa6";
import { cn, RadioProps, useRadio, VisuallyHidden } from "@nextui-org/react";
import { ReactNode } from "react";


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

export default function CheckoutForm() {
    return (
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
                <Input type="number" label="Card number" placeholder="Card number" labelPlacement="outside" startContent={<FaCreditCard className="text-base mr-1 text-default-400 pointer-events-none flex-shrink-0" />} endContent={
                    <div className="flex max-w-[140px] items-center">
                        <Input type="number" name="card-month" placeholder="MM" min={0} minLength={0} max={12} maxLength={2} size="sm" classNames={{ input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0" }} />
                        <span className="mx-1 text-default-300">/</span>
                        <Input type="number" name="card-year" placeholder="YY" min={0} minLength={0} max={99} maxLength={2} size="sm" classNames={{ input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0" }} />
                        <Input type="number" name="card-cvc" placeholder="CVC" min={0} minLength={0} max={999} maxLength={3} size="sm" classNames={{ input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0" }} />
                    </div>

                } />
                <Input type="text" label="Cardholder name" placeholder="Cardholder name" labelPlacement="outside" />
            </div>
            <CheckboxGroup label="Billing address">
                <Checkbox value="true">Same as shipping address</Checkbox>
            </CheckboxGroup>
        </form>
    );
}