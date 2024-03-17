import { Input, RadioGroup, Image } from "@nextui-org/react";
import { MethodRadio } from "./checkout-form";
import { MoMo, Stripe } from "./icons/brands";
import { useState } from "react";
import { FaCreditCard } from "react-icons/fa6";

export default function PaymentMethods() {
    const [isCardFormShown, setIsCardFormShown] = useState(false);
    
    const handleMethodChange = (value: string): void => {
        if (value === "stripe") setIsCardFormShown(true);
        else setIsCardFormShown(false);
    }

    return (
        <>
            <RadioGroup label="Payment Method" orientation="horizontal" classNames={{ wrapper: "gap-3" }} onValueChange={handleMethodChange}>
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