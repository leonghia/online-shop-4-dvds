import { Input, RadioGroup, Radio, CheckboxGroup, Checkbox } from "@nextui-org/react";
import { cn, RadioProps, useRadio, VisuallyHidden } from "@nextui-org/react";
import { ReactNode } from "react";
import PaymentMethods from "./payment-methods";
import { UserProfile } from '@auth0/nextjs-auth0/client';

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

export default function CheckoutForm({user}: {user: UserProfile}) {

    return (
        <form className="flex flex-col gap-8 py-8">
            <div className="flex flex-col gap-4">
                <span className="relative text-foreground-500">
                    Shipping Information
                </span>

                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                    <Input type="text" label="First name" isDisabled labelPlacement="outside" defaultValue={user.name?.split(" ")[0]} />
                    <Input type="text" label="Last name" isDisabled labelPlacement="outside" defaultValue={user.name?.split(" ")[1]} />
                </div>                  
                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                    <Input type="email" label="Email" isDisabled labelPlacement="outside" defaultValue={user.email || ""} />
                    <Input type="text" label="Phone number" placeholder="+1 (555) 555-5555" isRequired labelPlacement="outside" />
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                    <Input type="text" label="Address" placeholder="Lane 1, Street 1" isRequired labelPlacement="outside" />
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
            <PaymentMethods />
            <CheckboxGroup label="Billing address">
                <Checkbox value="true">Same as shipping address</Checkbox>
            </CheckboxGroup>
        </form>
    );
}