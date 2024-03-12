import { Movie } from "@/models/movie";
import { Button, Image } from "@nextui-org/react";
import { FaHeart, FaStar } from "react-icons/fa6";

export default function MovieCard({movie}: {movie: Movie}) {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large p-4 shadow-medium rounded-none bg-transparent shadow-none w-full snap-start"
            color="black"
        >
            <Button isIconOnly color="default" variant="flat" radius="full" aria-label="Save" className="absolute right-6 top-6 z-20" size="sm">
                <FaHeart className="text-default-500" />
            </Button>
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                <Image src={movie.coverUrl} className="z-0 h-full max-h-[80%] w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110" removeWrapper />
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-medium font-medium text-default-700">
                        {movie.title} ({movie.releasedYear})
                    </h3>
                    <p className="text-medium font-medium text-pink-500">${movie.price}</p>
                </div>
                <p className="text-small text-default-500 line-clamp-3">
                    {movie.description}
                </p>
                <div className="flex items-center gap-2">
                    <span><FaStar className="text-yellow-500" /></span>
                    <p className="text-small text-default-400">{movie.rating} / 10</p>
                </div>
                <div className="flex gap-2">
                    <Button color="default" className="w-full font-medium">Add to cart</Button>
                </div>
            </div>
        </div>

    );
}