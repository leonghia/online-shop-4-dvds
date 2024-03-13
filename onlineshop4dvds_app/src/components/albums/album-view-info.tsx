import { Album } from "@/models/album";
import { Avatar, BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import { FaRegCreditCard, FaTentArrowTurnLeft, FaCartShopping, FaRegHeart } from "react-icons/fa6";
import StarRatings from "../star-ratings";

export default function AlbumViewInfo({album}: {album: Album | null}) {
    return (
        <div className="max-w-7xl h-full w-full px-2">

            <Breadcrumbs className="my-4 py-2">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/albums">Albums</BreadcrumbItem>
                <BreadcrumbItem href="#">{album?.title}</BreadcrumbItem>
            </Breadcrumbs>

            <div
                className="relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
                id="942837-003"
            >
                <div className="relative h-full w-full flex-none">
                    
                    <div
                        className="relative shadow-black/5 shadow-none rounded-large"
                        style={{ maxWidth: "fit-content" }}
                    >
                        {" "}
                        <img
                            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/1.jpeg"
                            className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                            alt="Nike Air Max 270"
                            data-loaded="true"
                        />
                    </div>
                    <div
                        className="overflow-x-auto data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] -mx-2 -mb-4 mt-4 flex w-full max-w-full gap-4 px-2 pb-4 pt-2"
                        data-orientation="horizontal"
                        data-left-scroll="false"
                        data-right-scroll="true"
                    >
                        <button
                            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                            data-selected="true"
                        >
                            <img
                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/1.jpeg"
                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                                alt="Nike Air Max 270"
                                data-loaded="true"
                            />
                        </button>
                        <button
                            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                            data-selected="false"
                        >
                            <img
                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/2.jpeg"
                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                                alt="Nike Air Max 270"
                                data-loaded="true"
                            />
                        </button>
                        <button
                            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                            data-selected="false"
                        >
                            <img
                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/3.jpeg"
                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                                alt="Nike Air Max 270"
                                data-loaded="true"
                            />
                        </button>
                        <button
                            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                            data-selected="false"
                        >
                            <img
                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/4.jpeg"
                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                                alt="Nike Air Max 270"
                                data-loaded="true"
                            />
                        </button>
                        <button
                            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                            data-selected="false"
                        >
                            <img
                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/5.jpeg"
                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                                alt="Nike Air Max 270"
                                data-loaded="true"
                            />
                        </button>
                        <button
                            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
                            data-selected="false"
                        >
                            <img
                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/6.jpeg"
                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large h-full w-full"
                                alt="Nike Air Max 270"
                                data-loaded="true"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-small font-medium text-default-400 mb-2">Album</p>
                    <h1 className="text-3xl font-bold tracking-tight">
                        {album?.title}
                    </h1>
                    <div className="flex items-center gap-x-2 my-3">
                        <Avatar src={album?.artistAvatar} showFallback name={album?.artist} size="sm" />
                        <p className="text-small text-default-500">{album?.artist}</p>
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
                    <p className="text-xl font-medium tracking-tight text-pink-500">${album?.price}</p>
                    <div className="mt-4">
                        <p className="sr-only">Product description</p>
                        <p className="line-clamp-3 text-medium text-default-500">
                            The Nike Air Max 270 delivers an even more adaptive fit than
                            before. Stretch material in the upper moves with your foot, while
                            the tri-star outsole pattern adjusts to your every step for a ride
                            that delivers support and flexibility where you need it.
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
                    <div className="px-2 w-full -mx-1 mt-2" data-orientation="vertical">
                        <div className="group-[.is-splitted]:px-4 group-[.is-splitted]:bg-content1 group-[.is-splitted]:shadow-medium group-[.is-splitted]:rounded-medium">
                            <h2>
                                <button
                                    className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 transition-opacity"
                                    type="button"
                                    id=":r1d:"
                                    aria-expanded="false"
                                >
                                    <div className="flex-1 flex flex-col text-start">
                                        <span className="text-large text-default-400">
                                            Size &amp; Fit
                                        </span>
                                    </div>
                                    <span
                                        aria-hidden="true"
                                        className="text-default-400 transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            fill="none"
                                            focusable="false"
                                            height="1em"
                                            role="presentation"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                        >
                                            <path
                                                d="M15.5 19l-7-7 7-7"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <hr
                            className="shrink-0 bg-divider border-none w-full h-divider"
                            role="separator"
                        />
                        <div className="group-[.is-splitted]:px-4 group-[.is-splitted]:bg-content1 group-[.is-splitted]:shadow-medium group-[.is-splitted]:rounded-medium">
                            <h2>
                                <button
                                    className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 transition-opacity"
                                    type="button"
                                    id=":r1f:"
                                    aria-expanded="false"
                                >
                                    <div className="flex-1 flex flex-col text-start">
                                        <span className="text-large text-default-400">
                                            Shipping &amp; Returns
                                        </span>
                                    </div>
                                    <span
                                        aria-hidden="true"
                                        className="text-default-400 transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            fill="none"
                                            focusable="false"
                                            height="1em"
                                            role="presentation"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                        >
                                            <path
                                                d="M15.5 19l-7-7 7-7"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                        </div>
                        <hr
                            className="shrink-0 bg-divider border-none w-full h-divider"
                            role="separator"
                        />
                        <div className="group-[.is-splitted]:px-4 group-[.is-splitted]:bg-content1 group-[.is-splitted]:shadow-medium group-[.is-splitted]:rounded-medium">
                            <h2>
                                <button
                                    className="flex py-4 w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 transition-opacity"
                                    type="button"
                                    id=":r1h:"
                                    aria-expanded="false"
                                >
                                    <div className="flex-1 flex flex-col text-start">
                                        <span className="text-large text-default-400">
                                            Designer Notes
                                        </span>
                                    </div>
                                    <span
                                        aria-hidden="true"
                                        className="text-default-400 transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            fill="none"
                                            focusable="false"
                                            height="1em"
                                            role="presentation"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                        >
                                            <path
                                                d="M15.5 19l-7-7 7-7"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                        </div>
                    </div>
                    <div className="mt-2 flex gap-2">
                        <Button className="w-full font-medium" color="primary" startContent={<FaCartShopping className="h-5 w-5"/>} size="lg">Add to cart</Button>
                        <Button isIconOnly color="secondary" aria-label="Add to favorites" size="lg">
                            <FaRegHeart className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}