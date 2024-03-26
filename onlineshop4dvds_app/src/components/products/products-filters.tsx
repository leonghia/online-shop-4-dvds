import { Button, Popover, PopoverTrigger, PopoverContent, Slider, Input, Divider } from "@nextui-org/react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const defaultPriceRange: number[] = [0, 1000];

export default function ProductsFilters() {
    const [priceRange, setPriceRange] = useState<number[] | number>([0, 500]);

    return (
        <header className="relative z-20 flex flex-col gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3">
            <div className="flex items-center gap-1 md:hidden md:gap-2">
                <h2 className="text-large font-medium">Shoes</h2>
                <span className="text-small text-default-400">(1240)</span>
            </div>
            <div className="flex items-center justify-between gap-2 ">
                <div className="flex flex-row gap-2">
                    <div className="hidden items-center gap-2 md:flex">
                        <h2 className="text-medium font-medium">Products</h2>
                        <span className="text-small text-default-400">(1240)</span>
                    </div>
                </div>
                <div className="-ml-2 flex w-full flex-wrap items-center justify-start gap-2 md:ml-0 md:justify-end">
                    <Popover placement="bottom" classNames={{ content: "flex max-w-xs flex-col items-start gap-2 px-4 pt-4" }}>
                        <PopoverTrigger>
                            <Button variant="bordered" className="text-default-500" endContent={<HiChevronDown />}>Pricing Range</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <span className="mb-2 text-medium font-medium text-default-600">
                                Pricing Range
                            </span>
                            <div className="w-full px-2">
                                <div className="flex flex-col gap-3">
                                    <Slider
                                        size="sm"
                                        step={50}
                                        minValue={0}
                                        maxValue={1000}
                                        value={priceRange}
                                        onChange={setPriceRange}
                                        formatOptions={{ style: "currency", currency: "USD" }}
                                        
                                    />
                                    <div className="flex items-center">
                                        <Input type="number" min={0} max={1000} step={50} value={(priceRange as number[])[0].toString()} onValueChange={(value: string) => setPriceRange([parseInt(value), (priceRange as number[])[1]])} labelPlacement="outside" startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400">$</span>
                                            </div>
                                        } />
                                        <Divider className="mx-2 w-2" />
                                        <Input type="number" min={0} max={1000} step={50} value={(priceRange as number[])[1].toString()} onValueChange={(value: string) => setPriceRange([(priceRange as number[])[0], parseInt(value)])} labelPlacement="outside" startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400">$</span>
                                            </div>
                                        } />
                                    </div>
                                </div>
                            </div>
                            <Divider className="mt-3 bg-default-100" />
                            <div className="flex w-full justify-end gap-2 py-2">
                                <Button size="sm" variant="flat" className="font-medium" onPress={() => setPriceRange(defaultPriceRange)}>Reset</Button>
                                <Button size="sm" variant="flat" color="primary" className="font-medium">Apply</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header>
    );
}