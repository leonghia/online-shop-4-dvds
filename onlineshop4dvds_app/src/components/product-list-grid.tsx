import { Button, Link } from "@nextui-org/react";
import { FaArrowRightLong, FaHeart } from "react-icons/fa6";

export default function ProductListGrid() {
    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full items-baseline justify-between px-4">
                <h2 className="text-4xl font-bold tracking-tight from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b">Albums</h2>
                <Link
                    isExternal
                    showAnchorIcon
                    href="/albums"
                    anchorIcon={<FaArrowRightLong />}
                    className="gap-x-2 font-semibold"

                >
                    See all
                </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div
                    className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large p-4 shadow-medium rounded-none bg-transparent shadow-none w-full snap-start"
                    id={1}
                    href="#"
                    color="black"
                    size={42}
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
                        <img
                            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/1.png"
                            className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110"
                            alt="Training shoes"
                            data-loaded="true"
                        />
                    </div>
                    <div className="flex flex-col gap-3 px-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-medium font-medium text-default-700">
                                Training shoes
                            </h3>
                            <p className="text-medium font-medium text-default-500">$49.99</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-large w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover font-medium"
                                type="button"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large p-4 shadow-medium rounded-none bg-transparent shadow-none w-full snap-start"
                    id={2}
                    href="#"
                    color="red"
                    size={42}
                >
                    <button
                        className="group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground min-w-unit-8 w-unit-8 h-unit-8 data-[hover=true]:opacity-hover absolute right-6 top-6 z-20"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="text-default-500 iconify iconify--solar"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                            />
                        </svg>
                    </button>
                    <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                        <div className="flex-col gap-2 px-4 pt-6 hidden">
                            <h3 className="text-xl font-semibold tracking-tight text-default-800">
                                Sneakers
                            </h3>
                            <p className="text-small text-default-500" />
                        </div>
                        <img
                            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/11.png"
                            className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110"
                            alt="Sneakers"
                            data-loaded="true"
                        />
                    </div>
                    <div className="flex flex-col gap-3 px-1">
                        <div className="flex items-center justify-between">
                            <h3 className="text-medium font-medium text-default-700">Sneakers</h3>
                            <p className="text-medium font-medium text-default-500">$29.99</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-large w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover font-medium"
                                type="button"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}