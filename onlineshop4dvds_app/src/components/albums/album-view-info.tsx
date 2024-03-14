import { AlbumInfo } from "@/models/album";
import { Avatar, BreadcrumbItem, Breadcrumbs, Button, Chip, Divider, Image, ScrollShadow } from "@nextui-org/react";
import { FaRegCreditCard, FaTentArrowTurnLeft, FaCartShopping, FaRegHeart } from "react-icons/fa6";
import StarRatings from "../star-ratings";
import ImagesGallery from "../images-gallery";

export default function AlbumViewInfo({ album }: { album: AlbumInfo | null }) {
    return (
        <div className="max-w-5xl h-full w-full px-2">

            <Breadcrumbs className="my-4 py-2">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/albums">Albums</BreadcrumbItem>
                <BreadcrumbItem href="#">{album?.title}</BreadcrumbItem>
            </Breadcrumbs>

            <div
                className="relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
                id="942837-003"
            >
                <ImagesGallery images={album?.images} />
                <div className="flex flex-col">
                    <p className="text-small font-medium text-default-400 mb-2">Album</p>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {album?.title}
                    </h1>
                    <div className="flex items-center gap-x-2 my-3">
                        <Avatar src={album?.artistAvatar} showFallback name={album?.artist} size="sm" />
                        <p className="text-small text-default-500">{album?.artist}</p>
                    </div>
                    <div className="flex items-center gap-x-6 mb-2">
                        <div className="flex items-center space-x-2">
                            <p className="text-small text-foreground">Genres: </p>
                            <div>
                                {album?.genres.map(genre => <Chip key={genre}>{genre}</Chip>)}
                            </div>
                        </div>
                        <Divider orientation="vertical" className="h-5" />
                        <div className="flex items-center space-x-2">
                            <p className="text-small text-foreground">Released: <span className="text-gray-500">{album?.released && new Date(album?.released).toLocaleDateString("vi-VN")}</span></p>
                        </div>
                    </div>
                    <h2 className="sr-only">Product information</h2>
                    <div className="my-2 flex items-center gap-2">
                        <div className="flex items-center gap-3">
                            <div
                                className="relative flex flex-col gap-2"
                                aria-label=" "
                                role="radiogroup"
                                aria-orientation="horizontal"
                                id="react-aria2048226057-:r0:"
                            >
                                <div
                                    className="flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row"
                                    role="presentation"
                                    data-orientation="horizontal"
                                >
                                    <StarRatings ratings={album?.ratings} />
                                </div>
                            </div>
                        </div>
                        <p className="text-small text-default-400">{album?.numbersOfReviews} reviews</p>
                    </div>
                    <div className="mt-2 flex gap-x-6 items-center">
                        <p className="text-xl font-medium tracking-tight text-pink-500">${album?.price}</p>
                        <p className="text-sm font-bold text-primary">In Stock</p>
                    </div>
                    <div className="mt-4">
                        <p className="sr-only">Product description</p>
                        <p className="line-clamp-3 text-medium text-default-500">
                            {album?.description}
                        </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-1">
                        <div className="mb-4 flex items-center gap-2 text-default-700">
                            <FaRegCreditCard />
                            <p className="text-small font-medium">
                                Online transfer or cash-on-delivery
                            </p>
                        </div>
                        <div className="mb-4 flex items-center gap-2 text-default-700">
                            <FaTentArrowTurnLeft />
                            <p className="text-small font-medium">
                                3 days return
                            </p>
                        </div>

                    </div>

                    <div className="mt-2 flex gap-2">
                        <Button className="w-full font-medium" color="primary" startContent={<FaCartShopping className="h-5 w-5" />} size="lg">Add to cart</Button>
                        <Button isIconOnly color="secondary" aria-label="Add to favorites" size="lg">
                            <FaRegHeart className="w-5 h-5 text-default-400" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}