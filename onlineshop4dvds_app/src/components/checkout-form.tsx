import { Input, RadioGroup, Radio, CheckboxGroup, Checkbox } from "@nextui-org/react";
import PaymentMethods from "./payment-methods";
import { UserProfile } from '@auth0/nextjs-auth0/client';
import PhoneNumberInput from "./phone-number-input";
import { Country } from "@/utils/country";
import PlaceSearchAutocomplete from "./place-search-autocomplete";

export default function CheckoutForm({user, countries, googleMapsApiKey, onChangePaymentMethod}: {user: UserProfile, countries: Country[], googleMapsApiKey: string, onChangePaymentMethod: Function}) {

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
                </div>
                <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap">
                    <PhoneNumberInput countries={countries} />
                </div>
                <div className="flex flex-wrap items-center sm:flex-nowrap">
                    <PlaceSearchAutocomplete apiKey={googleMapsApiKey} />
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
                <Radio value="office" description="Delivery Between 9AM - 5PM">
                    Office
                </Radio>
            </RadioGroup>
            <PaymentMethods onChangePaymentMethod={onChangePaymentMethod} />
            <CheckboxGroup label="Billing address">
                <Checkbox value="true">Same as shipping address</Checkbox>
            </CheckboxGroup>
        </form>
    );
}