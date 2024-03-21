import { Input, RadioGroup, Image, RadioProps, useRadio, VisuallyHidden, cn } from "@nextui-org/react";
import { MoMo, Stripe } from "./icons/brands";
import { ReactNode, useState } from "react";
import { FaCreditCard } from "react-icons/fa6";
import { PaymentMethodString } from "@/utils/payment";

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

export default function PaymentMethods({onChange}: {onChange: Function}) {
    const [isCardFormShown, setIsCardFormShown] = useState(false);
    
    const handleMethodChange = (method: PaymentMethodString): void => {
        if (method === PaymentMethodString.Stripe) setIsCardFormShown(true);
        else setIsCardFormShown(false);
        onChange(method);
    }

    return (
        <>
            <RadioGroup label="Payment Method" orientation="horizontal" classNames={{ wrapper: "gap-3" }} onValueChange={(value: string) => handleMethodChange(value as PaymentMethodString)} isRequired>
                <MethodRadio description="Pay with MoMo" value={PaymentMethodString.MoMo} icon={<MoMo className="h-6" />}>
                    MoMo
                </MethodRadio>
                <MethodRadio description="Pay with VNPAY" value={PaymentMethodString.VNPAY} icon={<Image src="https://i.ibb.co/0rV11HV/vnpay-qr-logo.png" className="h-6" removeWrapper alt="VNPAY logo" radius="none" />}>
                    VNPAY
                </MethodRadio>
                <MethodRadio description="Pay with Stripe" value={PaymentMethodString.Stripe} icon={<Stripe className="h-5" />}>
                    Stripe
                </MethodRadio>
            </RadioGroup>
            {isCardFormShown && (<div className="flex flex-col gap-4">
                <Input type="number" label="Card number" placeholder="Card number" labelPlacement="outside" startContent={<FaCreditCard className="text-base mr-1 text-default-400 pointer-events-none flex-shrink-0" />} endContent={
                    <div className="flex max-w-[140px] items-center">
                        <Input type="number" name="card-month" placeholder="MM" min={0} minLength={0} max={12} maxLength={2} size="sm" classNames={{ input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0" }} />
                        <span className="mx-1 text-default-300">/</span>
                        <Input type="number" name="card-year" placeholder="YY" min={0} minLength={0} max={99} maxLength={2} size="sm" classNames={{ input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0" }} />
                        <Input type="number" name="card-cvc" placeholder="CVC" min={0} minLength={0} max={999} maxLength={3} size="sm" classNames={{ input: "w-11 bg-transparent text-small outline-none placeholder:text-default-400", inputWrapper: "bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent px-0" }} />
                    </div>
                } />
                <Input type="text" label="Cardholder name" placeholder="Cardholder name" labelPlacement="outside" />
            </div>)}
        </>
    );
}