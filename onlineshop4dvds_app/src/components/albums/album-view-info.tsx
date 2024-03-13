export default function AlbumViewInfo({ id }: { id: number }) {
    return (
        <div className="max-w-8xl h-full w-full px-2 lg:px-24">
            <nav className="my-4 py-2">
                <nav data-slot="base" aria-label="Breadcrumbs">
                    <ol
                        data-slot="list"
                        className="flex flex-wrap list-none rounded-small"
                    >
                        <li data-slot="base" className="flex items-center">
                            <span
                                data-slot="item"
                                className="flex gap-1 items-center cursor-pointer whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline"
                                role="link"
                            >
                                Home
                            </span>
                            <span
                                data-slot="separator"
                                aria-hidden="true"
                                className="px-1 text-foreground/50"
                            >
                                <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1em"
                                    role="presentation"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </li>
                        <li data-slot="base" className="flex items-center">
                            <span
                                data-slot="item"
                                className="flex gap-1 items-center cursor-pointer whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline"
                                role="link"
                            >
                                Shoes Category
                            </span>
                            <span
                                data-slot="separator"
                                aria-hidden="true"
                                className="px-1 text-foreground/50"
                            >
                                <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1em"
                                    role="presentation"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    width="1em"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </span>
                        </li>
                        <li data-slot="base" className="flex items-center">
                            <span
                                data-slot="item"
                                data-current="true"
                                className="flex gap-1 items-center whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline cursor-default transition-opacity text-foreground"
                                aria-disabled="true"
                                role="link"
                                aria-current="page"
                            >
                                Training Shoes
                            </span>
                        </li>
                    </ol>
                </nav>
            </nav>
            <div
                className="relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
                id="942837-003"
            >
                <div className="relative h-full w-full flex-none">
                    <div className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 text-medium rounded-full absolute left-3 top-3 z-20 h-10 gap-1 bg-background/60 pl-3 pr-2 text-foreground/90 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="max-h-[80%] iconify iconify--solar"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
                            />
                        </svg>
                        <span className="flex-1 text-inherit font-normal px-2 pl-1">
                            Popular
                        </span>
                    </div>
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
                    <h1 className="text-2xl font-bold tracking-tight">
                        Nike Air Max 270
                    </h1>
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
                                    <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                        <div
                                            style={{
                                                border: "0px",
                                                clip: "rect(0px, 0px, 0px, 0px)",
                                                clipPath: "inset(50%)",
                                                height: "1px",
                                                margin: "-1px",
                                                overflow: "hidden",
                                                padding: "0px",
                                                position: "absolute",
                                                width: "1px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            <input
                                                aria-labelledby=":r6:"
                                                aria-describedby="react-aria2048226057-:r3:"
                                                type="radio"
                                                defaultValue={1}
                                                name="react-aria2048226057-:r5:"
                                            />
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="pointer-events-none transition-transform-colors text-primary group-data-[pressed=true]:scale-90 iconify iconify--solar"
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
                                    <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                        <div
                                            style={{
                                                border: "0px",
                                                clip: "rect(0px, 0px, 0px, 0px)",
                                                clipPath: "inset(50%)",
                                                height: "1px",
                                                margin: "-1px",
                                                overflow: "hidden",
                                                padding: "0px",
                                                position: "absolute",
                                                width: "1px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            <input
                                                aria-labelledby=":r7:"
                                                aria-describedby="react-aria2048226057-:r3:"
                                                type="radio"
                                                defaultValue={2}
                                                name="react-aria2048226057-:r5:"
                                            />
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="pointer-events-none transition-transform-colors text-primary group-data-[pressed=true]:scale-90 iconify iconify--solar"
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
                                    <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                        <div
                                            style={{
                                                border: "0px",
                                                clip: "rect(0px, 0px, 0px, 0px)",
                                                clipPath: "inset(50%)",
                                                height: "1px",
                                                margin: "-1px",
                                                overflow: "hidden",
                                                padding: "0px",
                                                position: "absolute",
                                                width: "1px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            <input
                                                aria-labelledby=":r8:"
                                                aria-describedby="react-aria2048226057-:r3:"
                                                type="radio"
                                                defaultValue={3}
                                                name="react-aria2048226057-:r5:"
                                            />
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="pointer-events-none transition-transform-colors text-primary group-data-[pressed=true]:scale-90 iconify iconify--solar"
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
                                    <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                        <div
                                            style={{
                                                border: "0px",
                                                clip: "rect(0px, 0px, 0px, 0px)",
                                                clipPath: "inset(50%)",
                                                height: "1px",
                                                margin: "-1px",
                                                overflow: "hidden",
                                                padding: "0px",
                                                position: "absolute",
                                                width: "1px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            <input
                                                aria-labelledby=":r9:"
                                                aria-describedby="react-aria2048226057-:r3:"
                                                type="radio"
                                                defaultValue={4}
                                                name="react-aria2048226057-:r5:"
                                            />
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="pointer-events-none transition-transform-colors text-primary group-data-[pressed=true]:scale-90 iconify iconify--solar"
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
                                    <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                        <div
                                            style={{
                                                border: "0px",
                                                clip: "rect(0px, 0px, 0px, 0px)",
                                                clipPath: "inset(50%)",
                                                height: "1px",
                                                margin: "-1px",
                                                overflow: "hidden",
                                                padding: "0px",
                                                position: "absolute",
                                                width: "1px",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            <input
                                                aria-labelledby=":ra:"
                                                aria-describedby="react-aria2048226057-:r3:"
                                                type="radio"
                                                defaultValue={5}
                                                name="react-aria2048226057-:r5:"
                                            />
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="pointer-events-none transition-transform-colors text-default-200 group-data-[pressed=true]:scale-90 iconify iconify--solar"
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
                        </div>
                        <p className="text-small text-default-400">669 reviews</p>
                    </div>
                    <p className="text-xl font-medium tracking-tight">$80.97</p>
                    <div className="mt-4">
                        <p className="sr-only">Product description</p>
                        <p className="line-clamp-3 text-medium text-default-500">
                            The Nike Air Max 270 delivers an even more adaptive fit than
                            before. Stretch material in the upper moves with your foot, while
                            the tri-star outsole pattern adjusts to your every step for a ride
                            that delivers support and flexibility where you need it.
                        </p>
                    </div>
                    <div
                        className="relative flex flex-col gap-2 ml-1 mt-6"
                        aria-label="Color"
                        role="radiogroup"
                        aria-orientation="horizontal"
                        id="react-aria2048226057-:rb:"
                    >
                        <div
                            className="flex flex-col flex-wrap data-[orientation=horizontal]:flex-row gap-2"
                            role="presentation"
                            data-orientation="horizontal"
                        >
                            <label
                                className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
                                data-selected="true"
                            >
                                <div
                                    style={{
                                        border: "0px",
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: "1px",
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: "0px",
                                        position: "absolute",
                                        width: "1px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <input
                                        aria-labelledby=":rh:"
                                        aria-describedby="react-aria2048226057-:re:"
                                        type="radio"
                                        defaultValue="#808080"
                                        defaultChecked
                                        name="react-aria2048226057-:rg:"
                                    />
                                </div>
                                <span
                                    className="pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90 ring-2 ring-offset-2 ring-offset-content1"
                                    style={{ backgroundColor: "rgb(128, 128, 128)" }}
                                />
                            </label>
                            <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                <div
                                    style={{
                                        border: "0px",
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: "1px",
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: "0px",
                                        position: "absolute",
                                        width: "1px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <input
                                        aria-labelledby=":rk:"
                                        aria-describedby="react-aria2048226057-:re:"
                                        type="radio"
                                        defaultValue="#ffffff"
                                        name="react-aria2048226057-:rg:"
                                    />
                                </div>
                                <span
                                    className="pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90"
                                    style={{ backgroundColor: "rgb(255, 255, 255)" }}
                                />
                            </label>
                            <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                <div
                                    style={{
                                        border: "0px",
                                        clip: "rect(0px, 0px, 0px, 0px)",
                                        clipPath: "inset(50%)",
                                        height: "1px",
                                        margin: "-1px",
                                        overflow: "hidden",
                                        padding: "0px",
                                        position: "absolute",
                                        width: "1px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <input
                                        aria-labelledby=":rn:"
                                        aria-describedby="react-aria2048226057-:re:"
                                        type="radio"
                                        defaultValue="#222222"
                                        name="react-aria2048226057-:rg:"
                                    />
                                </div>
                                <span
                                    className="pointer-events-none h-8 w-8 rounded-full border border-black border-opacity-10 transition-transform group-data-[pressed=true]:scale-90"
                                    style={{ backgroundColor: "rgb(34, 34, 34)" }}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-1">
                        <div className="mb-4 flex items-center gap-2 text-default-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--carbon"
                                width={24}
                                height={24}
                                viewBox="0 0 32 32"
                            >
                                <path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z" />
                                <path
                                    fill="currentColor"
                                    d="m29.919 16.606l-3-7A.999.999 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A3.992 3.992 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"
                                />
                            </svg>
                            <p className="text-small font-medium">
                                Free shipping and 30 days return
                            </p>
                        </div>
                        <div
                            className="relative flex flex-col gap-1"
                            aria-label="Select size"
                            role="radiogroup"
                            aria-orientation="horizontal"
                            id="react-aria2048226057-:rq:"
                        >
                            <div
                                className="flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row"
                                role="presentation"
                                data-orientation="horizontal"
                            >
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={36}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r10:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            36
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={37}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r11:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            37
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={38}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r12:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            38
                                        </span>
                                    </div>
                                </label>
                                <label
                                    className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
                                    data-selected="true"
                                >
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={39}
                                            defaultChecked
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-primary relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r13:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-primary-foreground">
                                            39
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={40}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r14:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            40
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={41}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r15:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            41
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={42}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r16:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            42
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={43}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r17:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            43
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={44}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r18:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            44
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={45}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r19:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            45
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={46}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r1a:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            46
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={48}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r1b:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            48
                                        </span>
                                    </div>
                                </label>
                                <label className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2">
                                    <div
                                        style={{
                                            border: "0px",
                                            clip: "rect(0px, 0px, 0px, 0px)",
                                            clipPath: "inset(50%)",
                                            height: "1px",
                                            margin: "-1px",
                                            overflow: "hidden",
                                            padding: "0px",
                                            position: "absolute",
                                            width: "1px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            defaultValue={50}
                                            name="react-aria2048226057-:rv:"
                                        />
                                    </div>
                                    <div
                                        className="max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-2 h-8 rounded-small bg-default/40 relative text-foreground select-none text-large transition-colors motion-reduce:transition-none"
                                        id=":r1c:"
                                    >
                                        <span className="flex-1 font-normal px-2 !text-small text-default-400">
                                            50
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <a
                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity my-2 text-default-400"
                            role="link"
                            href="#"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            See guide
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="[&>path]:stroke-[2px] iconify iconify--solar"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M6 18L18 6m0 0H9m9 0v9"
                                />
                            </svg>
                        </a>
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
                        <button
                            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-12 gap-unit-3 rounded-large w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover text-medium font-medium"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                focusable="false"
                                className="iconify iconify--solar"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M2.237 2.288a.75.75 0 1 0-.474 1.423l.265.089c.676.225 1.124.376 1.453.529c.312.145.447.262.533.382c.087.12.155.284.194.626c.041.361.042.833.042 1.546v2.672c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.982 2.26c.601.602 1.36.86 2.26.981c.866.117 1.969.117 3.336.117H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.002-3.192-.103c-.733-.099-1.122-.28-1.399-.556c-.235-.235-.4-.551-.506-1.091h10.12c.959 0 1.438 0 1.814-.248c.376-.248.565-.688.943-1.57l.428-1c.81-1.89 1.215-2.834.77-3.508C19.533 6 18.506 6 16.45 6H5.745a8.996 8.996 0 0 0-.047-.833c-.055-.485-.176-.93-.467-1.333c-.291-.404-.675-.66-1.117-.865c-.417-.194-.946-.37-1.572-.58zM7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
                                />
                            </svg>
                            Add to cart
                        </button>
                        <button
                            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium gap-unit-3 rounded-large px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 min-w-unit-12 w-unit-12 h-unit-12 data-[hover=true]:opacity-hover text-default-600"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--solar"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043c-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}