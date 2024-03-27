import { API_URL } from "@/config";
import { Genre } from "@/models/genre";
import { ProductSortOrder, ProductType, orderToString } from "@/utils/product";
import { Button, Popover, PopoverTrigger, PopoverContent, Slider, Input, Divider, RadioGroup, Radio, CheckboxGroup, Listbox, ListboxItem } from "@nextui-org/react";
import { MouseEvent, ReactElement, useEffect, useState } from "react";
import { HiChevronDown, HiMiniFunnel } from "react-icons/hi2";
import GenreCheckbox from "../genre-checkbox";
import StarRatings from "../star-ratings";
import { Product } from "@/models/product";
import { AcceptHeaders } from "@/utils/header";

const defaultPriceRange: number[] = [0, 1000];

const EmptyGenres = (): ReactElement => {
    return (
        <div className="p-4 flex flex-col justify-center items-center gap-2">
            <HiMiniFunnel className="w-10 h-10 text-default-300" />
            <p className="text-small font-medium text-default-500">Please select a specific product type</p>
        </div>
    );
}

export default function ProductsFilters({onApply, total}: {onApply: Function, total: number}) {
    const [genres, setGenres] = useState<Genre[] | null>(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([0, 500]);
    const [selectedProductType, setSelectedProductType] = useState<ProductType>(ProductType.All);
    const [selectedGenresIds, setSelectedGenresIds] = useState<number[]>([]);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [selectedSortOrder, setSelectedSortOrder] = useState<ProductSortOrder>(ProductSortOrder.Newest);
    const [url, setUrl] = useState<URL>(new URL(`${API_URL}/product`));

    useEffect(() => {
        if (selectedProductType === ProductType.All) return;
        fetch(`${API_URL}/genre?type=${selectedProductType}`)
            .then(res => res.json())
            .then((data: Genre[]) => setGenres(data))
            .catch(err => console.error(err));
    }, [selectedProductType]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then((data: Product[]) => onApply(data)).catch(err => console.error(err));
    }, [url]);

    const handleFilter = (sortOrder?: ProductSortOrder) => {
        const newUrl = new URL(`${API_URL}/product`);
        if (selectedPriceRange[0] >= 0 && selectedPriceRange[0] < selectedPriceRange[1]) {
            newUrl.searchParams.set("price_from", selectedPriceRange[0].toString());
            newUrl.searchParams.set("price_to", selectedPriceRange[1].toString());
        }
        if (selectedProductType !== ProductType.All) {
            newUrl.searchParams.set("type", selectedProductType.toString());
        }
        if (selectedGenresIds.length > 0) {
            newUrl.searchParams.set("genres", selectedGenresIds.join(","));
        }
        if (selectedRating > 0) {
            newUrl.searchParams.set("rating", selectedRating.toString());
        }
        newUrl.searchParams.set("sort", sortOrder?.toString() || selectedSortOrder.toString());
        setUrl(newUrl);
    }

    return (
        <header className="relative z-20 flex flex-col gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3">
            <div className="flex items-center gap-1 md:hidden md:gap-2">
                <h2 className="text-large font-medium">Total</h2>
                <span className="text-small text-default-400">()</span>
            </div>
            <div className="flex items-center justify-between gap-2 ">
                <div className="flex flex-row gap-2">
                    <div className="hidden items-center gap-2 md:flex">
                        <h2 className="text-medium font-medium">Products</h2>
                        <span className="text-small text-default-400">({total})</span>
                    </div>
                </div>
                <div className="-ml-2 flex w-full flex-wrap items-center justify-start gap-2 md:ml-0 md:justify-end">
                    <Popover placement="bottom" classNames={{ content: "flex max-w-xs min-w-56 flex-col items-start gap-2 px-4 pt-4" }}>
                        <PopoverTrigger>
                            <Button variant="bordered" className="text-default-500" endContent={<HiChevronDown />}>Product Type</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <span className="mb-2 text-medium font-medium text-default-600">
                                Product Type
                            </span>
                            <div className="w-full px-2">
                                <RadioGroup value={selectedProductType?.toString()} onValueChange={(value: string) => setSelectedProductType(parseInt(value))} >
                                    <Radio value={ProductType.Album.toString()}>{ProductType[ProductType.Album]}</Radio>
                                    <Radio value={ProductType.Movie.toString()}>{ProductType[ProductType.Movie]}</Radio>
                                    <Radio value={ProductType.Game.toString()}>{ProductType[ProductType.Game]}</Radio>
                                    <Radio value={ProductType.All.toString()}>{ProductType[ProductType.All]}</Radio>
                                </RadioGroup>
                            </div>
                            <Divider className="mt-3 bg-default-100" />
                            <div className="flex w-full justify-end gap-2 py-2">
                                <Button size="sm" variant="flat" className="font-medium" onPress={() => setSelectedProductType(ProductType.All)}>Reset</Button>
                                <Button size="sm" variant="flat" color="primary" className="font-medium" onPress={handleFilter}>Apply</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover placement="bottom" classNames={{ content: "flex max-w-xs min-w-56 flex-col items-start gap-2 px-4 pt-4" }}>
                        <PopoverTrigger>
                            <Button variant="bordered" className="text-default-500" endContent={<HiChevronDown />}>Genres</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <span className="mb-2 text-medium font-medium text-default-600">
                                Genres
                            </span>
                            <div className="w-full px-2">
                                {selectedProductType === ProductType.All ? <EmptyGenres /> : (
                                    <CheckboxGroup
                                        className="gap-1"
                                        orientation="horizontal"
                                        value={selectedGenresIds.map(id => id.toString())}
                                        onChange={(value: string[]) => setSelectedGenresIds(value.map(v => parseInt(v)))}
                                    >
                                        {genres?.map(g => <GenreCheckbox key={g.id} value={g.id.toString()}>{g.name}</GenreCheckbox>)}
                                    </CheckboxGroup>
                                )}
                            </div>
                            {selectedProductType !== ProductType.All && <><Divider className="mt-3 bg-default-100" />
                                <div className="flex w-full justify-end gap-2 py-2">
                                    <Button size="sm" variant="flat" className="font-medium" onPress={() => setSelectedGenresIds([])}>Reset</Button>
                                    <Button size="sm" variant="flat" color="primary" className="font-medium" onPress={handleFilter}>Apply</Button>
                                </div></>}
                        </PopoverContent>
                    </Popover>
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
                                        value={selectedPriceRange}
                                        onChange={setSelectedPriceRange}
                                        formatOptions={{ style: "currency", currency: "USD" }}

                                    />
                                    <div className="flex items-center">
                                        <Input type="number" min={0} max={1000} step={50} value={(selectedPriceRange as number[])[0].toString()} onValueChange={(value: string) => setSelectedPriceRange([parseInt(value), (selectedPriceRange as number[])[1]])} labelPlacement="outside" startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400">$</span>
                                            </div>
                                        } />
                                        <Divider className="mx-2 w-2" />
                                        <Input type="number" min={0} max={1000} step={50} value={(selectedPriceRange as number[])[1].toString()} onValueChange={(value: string) => setSelectedPriceRange([(selectedPriceRange as number[])[0], parseInt(value)])} labelPlacement="outside" startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400">$</span>
                                            </div>
                                        } />
                                    </div>
                                </div>
                            </div>
                            <Divider className="mt-3 bg-default-100" />
                            <div className="flex w-full justify-end gap-2 py-2">
                                <Button size="sm" variant="flat" className="font-medium" onPress={() => setSelectedPriceRange(defaultPriceRange)}>Reset</Button>
                                <Button size="sm" variant="flat" color="primary" className="font-medium" onPress={handleFilter}>Apply</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover placement="bottom" classNames={{ content: "flex max-w-xs min-w-56 flex-col items-start gap-2 px-4 pt-4" }}>
                        <PopoverTrigger>
                            <Button variant="bordered" className="text-default-500" endContent={<HiChevronDown />}>Rating</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <span className="mb-2 text-medium font-medium text-default-600">
                                Rating
                            </span>
                            <div className="w-full px-2">
                                <div className="flex items-center gap-3 w-72">
                                    <div className="flex flex-wrap gap-2" onClick={(event: MouseEvent) => {
                                        const svg = event.target.closest("svg") as SVGElement;
                                        if (!svg) return;
                                        setSelectedRating(parseInt(svg.dataset.rating!));
                                    }}>
                                        <StarRatings ratings={selectedRating} className="w-5 h-5 cursor-pointer" />
                                    </div>
                                    <p className="text-medium text-default-400">{selectedRating} stars &amp; up</p>
                                </div>
                            </div>
                            <Divider className="mt-3 bg-default-100" />
                            <div className="flex w-full justify-end gap-2 py-2">
                                <Button size="sm" variant="flat" className="font-medium" onPress={() => setSelectedRating(0)}>Reset</Button>
                                <Button size="sm" variant="flat" color="primary" className="font-medium" onPress={handleFilter}>Apply</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Popover placement="bottom" classNames={{ content: "flex max-w-xs min-w-56 flex-col items-start gap-2 px-0" }}>
                        <PopoverTrigger>
                            <Button variant="bordered" className="text-default-500 w-36 justify-between" endContent={<HiChevronDown />}>{orderToString(selectedSortOrder).length > 10 ? orderToString(selectedSortOrder).slice(0, 10) + "..." : orderToString(selectedSortOrder)}</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <Listbox
                                aria-label="Order by"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                onAction={(key) => {
                                    setSelectedSortOrder(parseInt(key as string));
                                    handleFilter(parseInt(key as string));
                                }}
                            >
                                <ListboxItem key={ProductSortOrder.Newest}>{orderToString(ProductSortOrder.Newest)}</ListboxItem>
                                <ListboxItem key={ProductSortOrder.PriceLowestToHighest}>{orderToString(ProductSortOrder.PriceLowestToHighest)}</ListboxItem>
                                <ListboxItem key={ProductSortOrder.PriceHighestToLowest}>{orderToString(ProductSortOrder.PriceHighestToLowest)}</ListboxItem>
                                <ListboxItem key={ProductSortOrder.TopRated}>{orderToString(ProductSortOrder.TopRated)}</ListboxItem>
                                <ListboxItem key={ProductSortOrder.MostPopular}>{orderToString(ProductSortOrder.MostPopular)}</ListboxItem>
                            </Listbox>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header>
    );
}