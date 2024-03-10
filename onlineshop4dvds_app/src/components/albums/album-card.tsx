import { Button, Image } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa6";

export default function AlbumCard() {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large p-4 shadow-medium rounded-none bg-transparent shadow-none w-full snap-start"
            color="black"
        >
            <Button isIconOnly color="default" variant="flat" radius="full" aria-label="Save" className="absolute right-6 top-6 z-20" size="sm">
                <FaHeart className="text-default-500" />
            </Button>
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                <div className="flex-col gap-2 px-4 pt-6 hidden">
                    <h3 className="text-xl font-semibold tracking-tight text-default-800">
                        Training shoes
                    </h3>
                    <p className="text-small text-default-500" />
                </div>
                <Image src="https://www.flyingnun.co.nz/cdn/shop/products/tsblue.png?v=1695426733" className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110" removeWrapper />
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-medium font-medium text-default-700">
                        1989 (Taylor's Version)
                    </h3>
                    <p className="text-medium font-medium text-default-500">$49.99</p>
                </div>
                <p className="text-small text-default-500">Taylor Swift</p>
                <div className="flex gap-2">
                    <Button color="primary" className="w-full font-semibold">Add to cart</Button>
                </div>
            </div>
        </div>
    );
}