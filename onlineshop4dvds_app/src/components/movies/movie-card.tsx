import { Button, Image } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa6";

export default function MovieCard() {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large p-4 shadow-medium rounded-none bg-transparent shadow-none w-full snap-start"
            color="black"
        >
            <Button isIconOnly color="default" variant="flat" radius="full" aria-label="Save" className="absolute right-6 top-6 z-20" size="sm">
                <FaHeart className="text-default-500" />
            </Button>
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b3b0acac-e503-41ef-872d-97713b6f87c5/d9acdsj-2b2a5711-0237-4b0f-a2d0-ddd2eeedaa28.png" className="z-0 h-full max-h-full w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110" removeWrapper />
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-medium font-medium text-default-700">
                        The Dark Knight (2008)
                    </h3>
                    <p className="text-medium font-medium text-default-500">$49.99</p>
                </div>
                <p className="text-small text-default-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor,
                    augue eget cursus mattis.
                </p>
                <div className="flex items-center gap-1">
                    <div
                        className="relative flex flex-col gap-2"
                        aria-label=" "
                        role="radiogroup"
                        aria-readonly="true"
                        aria-orientation="horizontal"
                        id="react-aria5134884098-:r0:"
                    >
                        <div
                            className="flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row"
                            role="presentation"
                            data-orientation="horizontal"
                        >
                            <label className="group relative max-w-fit inline-flex items-center justify-start tap-highlight-transparent p-2 -m-2 cursor-default">
                                <div
                                    style={{
                                        border: 0,
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: 1,
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: 0,
                                        position: "absolute",
                                        width: 1,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <input
                                        aria-labelledby=":r6:"
                                        aria-describedby="react-aria5134884098-:r3:"
                                        tabIndex={-1}
                                        type="radio"
                                        defaultValue={1}
                                        name="react-aria5134884098-:r5:"
                                    />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="pointer-events-none transition-transform-colors text-yellow-500 iconify iconify--solar"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                                    />
                                </svg>
                            </label>
                            <label className="group relative max-w-fit inline-flex items-center justify-start tap-highlight-transparent p-2 -m-2 cursor-default">
                                <div
                                    style={{
                                        border: 0,
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: 1,
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: 0,
                                        position: "absolute",
                                        width: 1,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <input
                                        aria-labelledby=":r7:"
                                        aria-describedby="react-aria5134884098-:r3:"
                                        tabIndex={-1}
                                        type="radio"
                                        defaultValue={2}
                                        name="react-aria5134884098-:r5:"
                                    />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="pointer-events-none transition-transform-colors text-yellow-500 iconify iconify--solar"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                                    />
                                </svg>
                            </label>
                            <label className="group relative max-w-fit inline-flex items-center justify-start tap-highlight-transparent p-2 -m-2 cursor-default">
                                <div
                                    style={{
                                        border: 0,
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: 1,
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: 0,
                                        position: "absolute",
                                        width: 1,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <input
                                        aria-labelledby=":r8:"
                                        aria-describedby="react-aria5134884098-:r3:"
                                        tabIndex={-1}
                                        type="radio"
                                        defaultValue={3}
                                        name="react-aria5134884098-:r5:"
                                    />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="pointer-events-none transition-transform-colors text-yellow-500 iconify iconify--solar"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                                    />
                                </svg>
                            </label>
                            <label
                                className="group relative max-w-fit inline-flex items-center justify-start tap-highlight-transparent p-2 -m-2 cursor-default"
                                data-selected="true"
                            >
                                <div
                                    style={{
                                        border: 0,
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: 1,
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: 0,
                                        position: "absolute",
                                        width: 1,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <input
                                        aria-labelledby=":r9:"
                                        aria-describedby="react-aria5134884098-:r3:"
                                        tabIndex={0}
                                        type="radio"
                                        defaultValue={4}
                                        defaultChecked
                                        name="react-aria5134884098-:r5:"
                                    />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="pointer-events-none transition-transform-colors text-yellow-500 iconify iconify--solar"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                                    />
                                </svg>
                            </label>
                            <label className="group relative max-w-fit inline-flex items-center justify-start tap-highlight-transparent p-2 -m-2 cursor-default">
                                <div
                                    style={{
                                        border: 0,
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: 1,
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: 0,
                                        position: "absolute",
                                        width: 1,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    <input
                                        aria-labelledby=":ra:"
                                        aria-describedby="react-aria5134884098-:r3:"
                                        tabIndex={-1}
                                        type="radio"
                                        defaultValue={5}
                                        name="react-aria5134884098-:r5:"
                                    />
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="pointer-events-none transition-transform-colors text-default-200 iconify iconify--solar"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                                    />
                                </svg>
                            </label>
                        </div>
                    </div>
                    <p className="text-small text-default-400">(272)</p>
                </div>
                <div className="flex gap-2">
                    <Button color="default" className="w-full font-medium">Add to cart</Button>
                </div>
            </div>
        </div>

    );
}