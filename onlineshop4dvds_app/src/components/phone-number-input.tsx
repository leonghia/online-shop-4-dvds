import { Country } from "@/utils/country";
import { Avatar, Image, Input } from "@nextui-org/react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Key, useState } from "react";

export default function PhoneNumberInput({ countries }: { countries: Country[] }) {
    const [selectedKey, setSelectedKey] = useState<Key | null>(null);
    

    const handleSelectionChange = (key: Key) => {
        setSelectedKey(key);
    };

    return (
        <>
            <Autocomplete
                defaultItems={countries}
                label="Country"
                labelPlacement="outside"
                placeholder="Select country"
                className="basis-2/5"
                onSelectionChange={handleSelectionChange}
                startContent={selectedKey ? <Image alt={selectedKey.toString()} src={`https://flagcdn.com/${selectedKey.toString().toLowerCase()}.svg`} removeWrapper className="w-5 h-5 object-cover" /> : null}
            >
                {(country) => <AutocompleteItem key={country.code} textValue={country.name} startContent={<Avatar alt={country.name} className="w-5 h-5" src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`} />}>{country.name} <span className="text-default-500">{country.dial_code}</span></AutocompleteItem>}
            </Autocomplete>
            <Input type="text" label="Phone number" placeholder="+1 (555) 555-5555" isRequired labelPlacement="outside" className="basis-3/5" />
        </>
    );
}