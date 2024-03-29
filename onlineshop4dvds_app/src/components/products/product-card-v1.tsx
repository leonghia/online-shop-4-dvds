import { Button, Image, Link } from "@nextui-org/react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Product } from "@/models/product";
import StarRatings from "../star-ratings";
import AddToCart from "../carts/add-to-cart";

export default function ProductCardV1({ product }: { product: Product }) {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 p-4 rounded-none bg-transparent shadow-none w-full snap-start"
            color="black"
        >
            <AddToCart productId={product.id}>
                <Button isIconOnly color="default" variant="flat" radius="full" aria-label="Save" className="absolute right-6 top-6 z-20" size="sm" title="Add to cart">
                    <HiMiniShoppingCart className="text-default-500 w-4 h-4" />
                </Button>
            </AddToCart>
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                <Image src={product.thumbnailUrl} className="z-0 h-full max-h-[80%] w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110" removeWrapper />
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-start justify-between">
                    <Link href={`/product/${product.id}`} className="font-medium text-default-700" size="md">{product.title}</Link>
                    <p className="text-medium font-medium text-pink-500">${product.price}</p>
                </div>
                <p className="text-small text-default-500 line-clamp-3">
                    {product.description}
                </p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <div
                            className="relative flex flex-col gap-2"
                            aria-label=" "
                            role="radiogroup"
                            aria-orientation="horizontal"
                            id="react-aria2048226057-:r0:"
                        >
                            <div
                                className="flex flex-col flex-wrap gap-1 data-[orientation=horizontal]:flex-row"
                                role="presentation"
                                data-orientation="horizontal"
                            >
                                <StarRatings ratings={product.ratings} />
                            </div>
                        </div>
                    </div>
                    <p className="text-small text-default-400">{product.numbersOfReviews} reviews</p>
                </div>
            </div>
        </div>

    );
}