import PageLayout from "@/components/layouts/page-layout";
import { Input, RadioGroup, Radio } from "@nextui-org/react";

export default function CheckoutPage() {
    return (
        <PageLayout>
            <div className="flex items-center justify-center p-4">
                <section className="flex w-full max-w-5xl flex-col lg:flex-row lg:gap-8">
                    <div className="w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-extrabold">Checkout</h1>

                        </div>
                        <form className="flex flex-col gap-8 py-8">
                            <div className="flex flex-col gap-4">
                                <span className="relative text-foreground-500">
                                    Shipping Information
                                </span>

                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="First name" placeholder="Enter your first name" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Last name" placeholder="Enter your last name" isRequired labelPlacement="outside" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="Address" placeholder="Lane 1, Street 1" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Apt, suite, etc." placeholder="Apartment, studio, or floor" labelPlacement="outside" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="City" placeholder="Enter your city" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Country" placeholder="Select country" isRequired labelPlacement="outside" />
                                </div>
                                <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
                                    <Input type="text" label="Postal code" placeholder="12345" isRequired labelPlacement="outside" />
                                    <Input type="text" label="Phone number" placeholder="+1 (555) 555-5555" isRequired labelPlacement="outside" />
                                </div>
                            </div>
                            <RadioGroup
                                label="Address type"
                                color="primary"
                                orientation="horizontal"
                                classNames={{wrapper: "gap-8"}}
                            >
                                <Radio value="home" description="All Day Delivery">
                                    Home
                                </Radio>
                                <Radio value="office" description="Delivery Between 9AM - 6PM">
                                    Office
                                </Radio>                              
                            </RadioGroup>
                            <div
                                className="relative flex flex-col gap-2 mt-4"
                                aria-label="Payment Method"
                                role="radiogroup"
                                aria-orientation="horizontal"
                                id="react-aria1714968914-:r1u:"
                            >
                                <span className="relative text-foreground-500">Payment Method</span>
                                <div
                                    className="flex flex-col flex-wrap data-[orientation=horizontal]:flex-row lg:flex-nowrap gap-3"
                                    role="presentation"
                                    data-orientation="horizontal"
                                >
                                    <label
                                        className="group relative tap-highlight-transparent p-2 inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg 3 !border-medium border-default-100 data-[selected=true]:border-primary bg-content2 dark:bg-content1"
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
                                                aria-labelledby=":r24:"
                                                aria-describedby="react-aria1714968914-:r21:"
                                                tabIndex={0}
                                                type="radio"
                                                defaultValue={1234}
                                                defaultChecked=""
                                                name="react-aria1714968914-:r23:"
                                            />
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden border-solid border-medium box-border border-default rounded-full group-data-[hover-unselected=true]:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:border-primary w-5 h-5 group-data-[pressed=true]:scale-95 transition-transform-colors motion-reduce:transition-none"
                                        >
                                            <span className="z-10 opacity-0 scale-0 origin-center rounded-full group-data-[selected=true]:opacity-100 group-data-[selected=true]:scale-100 bg-primary text-primary-foreground w-2 h-2 transition-transform-opacity motion-reduce:transition-none" />
                                        </span>
                                        <div className="flex flex-col ml-0">
                                            <span
                                                id=":r24:"
                                                className="relative text-foreground select-none text-medium transition-colors motion-reduce:transition-none"
                                            >
                                                <div className="flex w-full items-center gap-3">
                                                    <div className="item-center flex rounded-small p-2">
                                                        <svg
                                                            fill="none"
                                                            height={30}
                                                            viewBox="0 0 512 512"
                                                            width={30}
                                                        >
                                                            <path
                                                                d="M253.509 175.921L219.303 335.84H177.929L212.138 175.921H253.509ZM427.568 279.182L449.343 219.13L461.874 279.182H427.568ZM473.744 335.84H512L478.578 175.921H443.29C435.337 175.921 428.632 180.532 425.665 187.643L363.587 335.84H407.037L415.662 311.957H468.734L473.744 335.84ZM365.742 283.632C365.921 241.426 307.397 239.088 307.789 220.23C307.915 214.5 313.382 208.397 325.331 206.836C331.255 206.073 347.603 205.454 366.134 213.993L373.381 180.068C363.429 176.467 350.62 173 334.683 173C293.783 173 265.012 194.725 264.782 225.859C264.519 248.883 285.334 261.72 300.984 269.388C317.119 277.226 322.525 282.251 322.446 289.254C322.335 299.983 309.58 304.734 297.704 304.914C276.892 305.238 264.828 299.289 255.214 294.807L247.704 329.866C257.387 334.297 275.227 338.153 293.7 338.351C337.183 338.351 365.612 316.881 365.742 283.632ZM194.391 175.921L127.357 335.84H83.6302L50.64 208.213C48.6401 200.365 46.8957 197.48 40.8134 194.164C30.8645 188.761 14.4413 183.708 0 180.564L0.978353 175.921H71.3758C80.3427 175.921 88.4104 181.888 90.4642 192.218L107.891 284.765L150.927 175.921H194.391Z"
                                                                fill="#1434CB"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-1">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-small">1234 ****</p>
                                                        </div>
                                                        <p className="text-tiny text-default-400">
                                                            Exp. on 02/2025
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </label>
                                    <label className="group relative tap-highlight-transparent p-2 inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg 3 !border-medium border-default-100 data-[selected=true]:border-primary bg-content2 dark:bg-content1">
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
                                                aria-labelledby=":r25:"
                                                aria-describedby="react-aria1714968914-:r21:"
                                                tabIndex={-1}
                                                type="radio"
                                                defaultValue={8888}
                                                name="react-aria1714968914-:r23:"
                                            />
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden border-solid border-medium box-border border-default rounded-full group-data-[hover-unselected=true]:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:border-primary w-5 h-5 group-data-[pressed=true]:scale-95 transition-transform-colors motion-reduce:transition-none"
                                        >
                                            <span className="z-10 opacity-0 scale-0 origin-center rounded-full group-data-[selected=true]:opacity-100 group-data-[selected=true]:scale-100 bg-primary text-primary-foreground w-2 h-2 transition-transform-opacity motion-reduce:transition-none" />
                                        </span>
                                        <div className="flex flex-col ml-0">
                                            <span
                                                id=":r25:"
                                                className="relative text-foreground select-none text-medium transition-colors motion-reduce:transition-none"
                                            >
                                                <div className="flex w-full items-center gap-3">
                                                    <div className="item-center flex rounded-small p-2">
                                                        <svg
                                                            fill="none"
                                                            height={30}
                                                            viewBox="0 0 512 512"
                                                            width={30}
                                                        >
                                                            <path
                                                                d="M325.228 131.82H186.781V380.612H325.228V131.82Z"
                                                                fill="#FF5F00"
                                                            />
                                                            <path
                                                                d="M195.571 256.225C195.549 232.264 200.978 208.613 211.448 187.061C221.919 165.509 237.155 146.622 256.003 131.829C232.662 113.482 204.629 102.072 175.11 98.9037C145.591 95.7353 115.776 100.936 89.0725 113.912C62.3692 126.887 39.8553 147.114 24.1041 172.28C8.35298 197.446 0 226.536 0 256.225C0 285.914 8.35298 315.004 24.1041 340.17C39.8553 365.336 62.3692 385.562 89.0725 398.538C115.776 411.513 145.591 416.714 175.11 413.546C204.629 410.378 232.662 398.968 256.003 380.621C237.155 365.828 221.919 346.941 211.449 325.389C200.979 303.837 195.549 280.185 195.571 256.225Z"
                                                                fill="#EB001B"
                                                            />
                                                            <path
                                                                d="M512 256.225C512.001 285.913 503.649 315.003 487.899 340.169C472.149 365.335 449.636 385.562 422.933 398.538C396.23 411.513 366.415 416.714 336.896 413.546C307.378 410.378 279.346 398.968 256.005 380.621C274.837 365.813 290.061 346.922 300.529 325.374C310.998 303.825 316.437 280.181 316.437 256.225C316.437 232.268 310.998 208.624 300.529 187.076C290.061 165.527 274.837 146.637 256.005 131.828C279.346 113.482 307.378 102.072 336.896 98.9036C366.415 95.7353 396.23 100.936 422.933 113.912C449.636 126.888 472.149 147.114 487.899 172.28C503.649 197.447 512.001 226.536 512 256.225Z"
                                                                fill="#F79E1B"
                                                            />
                                                            <path
                                                                d="M496.905 354.265V349.171H498.959V348.134H493.729V349.171H495.783V354.265H496.905ZM507.06 354.265V348.124H505.457L503.613 352.348L501.768 348.124H500.164V354.265H501.296V349.632L503.026 353.626H504.199L505.929 349.622V354.265H507.06Z"
                                                                fill="#F79E1B"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-1">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-small">8888 ****</p>
                                                        </div>
                                                        <p className="text-tiny text-default-400">
                                                            Exp. on 02/2025
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </label>
                                    <label className="group relative tap-highlight-transparent p-2 inline-flex m-0 px-3 py-4 max-w-[100%] items-center justify-between flex-row-reverse w-full cursor-pointer rounded-lg 3 !border-medium border-default-100 data-[selected=true]:border-primary bg-content2 dark:bg-content1">
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
                                                aria-labelledby=":r26:"
                                                aria-describedby="react-aria1714968914-:r21:"
                                                tabIndex={-1}
                                                type="radio"
                                                defaultValue="paypal"
                                                name="react-aria1714968914-:r23:"
                                            />
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden border-solid border-medium box-border border-default rounded-full group-data-[hover-unselected=true]:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:border-primary w-5 h-5 group-data-[pressed=true]:scale-95 transition-transform-colors motion-reduce:transition-none"
                                        >
                                            <span className="z-10 opacity-0 scale-0 origin-center rounded-full group-data-[selected=true]:opacity-100 group-data-[selected=true]:scale-100 bg-primary text-primary-foreground w-2 h-2 transition-transform-opacity motion-reduce:transition-none" />
                                        </span>
                                        <div className="flex flex-col ml-0">
                                            <span
                                                id=":r26:"
                                                className="relative text-foreground select-none text-medium transition-colors motion-reduce:transition-none"
                                            >
                                                <div className="flex w-full items-center gap-3">
                                                    <div className="item-center flex rounded-small p-2">
                                                        <svg
                                                            fill="none"
                                                            height={30}
                                                            viewBox="0 0 512 512"
                                                            width={30}
                                                        >
                                                            <path
                                                                d="M345.495 188.005H305.665C302.946 188.005 300.628 189.985 300.203 192.675L284.097 294.794C283.776 296.809 285.337 298.626 287.369 298.626H307.808C309.706 298.626 311.331 297.24 311.628 295.353L316.199 266.407C316.618 263.711 318.942 261.731 321.661 261.731H334.262C360.501 261.731 375.635 249.037 379.595 223.881C381.382 212.876 379.664 204.228 374.511 198.172C368.857 191.522 358.824 188.005 345.495 188.005ZM350.089 225.302C347.917 239.592 336.999 239.592 326.436 239.592H320.433L324.654 212.905C324.905 211.292 326.29 210.104 327.927 210.104H330.681C337.867 210.104 344.656 210.104 348.162 214.203C350.252 216.649 350.887 220.282 350.089 225.302Z"
                                                                fill="#179BD7"
                                                            />
                                                            <path
                                                                d="M464.528 224.843H445.469C443.833 224.843 442.441 226.03 442.197 227.643L441.353 232.977L440.013 231.044C435.885 225.052 426.684 223.049 417.496 223.049C396.422 223.049 378.429 239.01 374.923 261.4C373.107 272.568 375.686 283.248 382.022 290.695C387.845 297.543 396.148 300.396 406.042 300.396C423.022 300.396 432.437 289.478 432.437 289.478L431.587 294.777C431.267 296.804 432.828 298.62 434.872 298.62H452.044C454.763 298.62 457.081 296.641 457.506 293.945L467.818 228.674C468.133 226.665 466.572 224.843 464.528 224.843ZM437.946 261.959C436.118 272.853 427.459 280.167 416.43 280.167C410.904 280.167 406.467 278.391 403.625 275.025C400.807 271.683 399.747 266.926 400.632 261.627C402.362 250.825 411.143 243.272 422.003 243.272C427.418 243.272 431.82 245.072 434.72 248.467C437.637 251.896 438.79 256.683 437.946 261.959Z"
                                                                fill="#179BD7"
                                                            />
                                                            <path
                                                                d="M487.012 190.807L470.667 294.794C470.347 296.809 471.907 298.626 473.94 298.626H490.372C493.103 298.626 495.421 296.646 495.84 293.95L511.958 191.837C512.278 189.823 510.718 188 508.686 188H490.285C488.66 188.006 487.263 189.194 487.012 190.807Z"
                                                                fill="#179BD7"
                                                            />
                                                            <path
                                                                d="M61.4399 188.005H21.6162C18.891 188.005 16.5734 189.985 16.1483 192.675L0.0418073 294.794C-0.27846 296.809 1.28211 298.626 3.32599 298.626H22.3382C25.0634 298.626 27.381 296.646 27.806 293.95L32.15 266.407C32.5693 263.711 34.8927 261.731 37.612 261.731H50.2189C76.4517 261.731 91.5916 249.037 95.5454 223.881C97.3273 212.876 95.6211 204.228 90.4677 198.172C84.8077 191.522 74.7688 188.005 61.4399 188.005ZM66.0343 225.302C63.8564 239.592 52.9383 239.592 42.3811 239.592H36.3717L40.5876 212.905C40.838 211.292 42.2355 210.104 43.866 210.104H46.6203C53.8117 210.104 60.5955 210.104 64.101 214.203C66.1915 216.649 66.832 220.282 66.0343 225.302Z"
                                                                fill="#253B80"
                                                            />
                                                            <path
                                                                d="M180.481 224.843H161.411C159.786 224.843 158.383 226.03 158.132 227.643L157.288 232.977L155.955 231.044C151.826 225.052 142.62 223.049 133.431 223.049C112.357 223.049 94.3584 239.01 90.853 261.4C89.0304 272.568 91.6216 283.248 97.9571 290.695C103.768 297.543 112.084 300.396 121.977 300.396C138.957 300.396 148.373 289.478 148.373 289.478L147.523 294.777C147.202 296.804 148.763 298.62 150.795 298.62H167.973C170.704 298.62 173.01 296.641 173.441 293.945L183.748 228.674C184.074 226.665 182.519 224.843 180.481 224.843ZM153.899 261.959C152.059 272.853 143.412 280.167 132.383 280.167C126.845 280.167 122.42 278.391 119.578 275.025C116.76 271.683 115.688 266.926 116.585 261.627C118.303 250.825 127.096 243.272 137.956 243.272C143.371 243.272 147.773 245.072 150.673 248.467C153.579 251.896 154.732 256.683 153.899 261.959Z"
                                                                fill="#253B80"
                                                            />
                                                            <path
                                                                d="M282.047 224.842H262.883C261.055 224.842 259.337 225.75 258.3 227.27L231.87 266.203L220.666 228.79C219.962 226.449 217.801 224.842 215.356 224.842H196.524C194.235 224.842 192.646 227.078 193.374 229.232L214.482 291.178L194.637 319.192C193.077 321.399 194.649 324.433 197.345 324.433H216.485C218.302 324.433 220.002 323.548 221.033 322.057L284.772 230.053C286.298 227.852 284.731 224.842 282.047 224.842Z"
                                                                fill="#253B80"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-1">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-small">PayPal</p>
                                                        </div>
                                                        <p className="text-tiny text-default-400">
                                                            Pay with PayPal
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div
                                    className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                                    data-slot="base"
                                    data-filled="true"
                                    data-filled-within="true"
                                    data-has-elements="true"
                                    data-has-label="true"
                                >
                                    <div data-slot="main-wrapper" className="h-full flex flex-col">
                                        <div
                                            data-slot="input-wrapper"
                                            className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background"
                                            style={{ cursor: "text" }}
                                        >
                                            <label
                                                data-slot="label"
                                                className="absolute pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                                                id="react-aria1714968914-:r28:"
                                                htmlFor="react-aria1714968914-:r27:"
                                            >
                                                Email address
                                            </label>
                                            <div
                                                data-slot="inner-wrapper"
                                                className="inline-flex w-full items-center h-full box-border"
                                            >
                                                <input
                                                    data-slot="input"
                                                    className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full"
                                                    aria-label="Email address"
                                                    placeholder="Enter address"
                                                    id="react-aria1714968914-:r27:"
                                                    aria-labelledby="react-aria1714968914-:r27: react-aria1714968914-:r28:"
                                                    type="email"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                                    data-slot="base"
                                    data-filled="true"
                                    data-filled-within="true"
                                    data-has-elements="true"
                                    data-has-label="true"
                                >
                                    <div data-slot="main-wrapper" className="h-full flex flex-col">
                                        <div
                                            data-slot="input-wrapper"
                                            className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background"
                                            style={{ cursor: "text" }}
                                        >
                                            <label
                                                data-slot="label"
                                                className="absolute pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                                                id="react-aria1714968914-:r2d:"
                                                htmlFor="react-aria1714968914-:r2c:"
                                            >
                                                Card number
                                            </label>
                                            <div
                                                data-slot="inner-wrapper"
                                                className="inline-flex w-full items-center h-full box-border"
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        aria-hidden="true"
                                                        role="img"
                                                        className="text-default-400 iconify iconify--solar"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <defs>
                                                            <mask id="iconifyReact0">
                                                                <g fill="none">
                                                                    <path
                                                                        fill="#fff"
                                                                        d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.442 0-.858-.002-1.25H2.002C2 11.142 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20"
                                                                    />
                                                                    <path
                                                                        fill="#000"
                                                                        fillRule="evenodd"
                                                                        d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </g>
                                                            </mask>
                                                        </defs>
                                                        <path
                                                            fill="currentColor"
                                                            d="M0 0h24v24H0z"
                                                            mask="url(#iconifyReact0)"
                                                        />
                                                    </svg>
                                                </span>
                                                <input
                                                    data-slot="input"
                                                    data-has-start-content="true"
                                                    data-has-end-content="true"
                                                    className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full"
                                                    aria-label="Card number"
                                                    minLength={0}
                                                    placeholder="Card number"
                                                    id="react-aria1714968914-:r2c:"
                                                    aria-labelledby="react-aria1714968914-:r2c: react-aria1714968914-:r2d:"
                                                    type="number"
                                                    defaultValue=""
                                                    name="card-number"
                                                />
                                                <div className="flex max-w-[140px] items-center">
                                                    <input
                                                        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                                                        min={0}
                                                        minLength={0}
                                                        max={12}
                                                        maxLength={2}
                                                        placeholder="MM"
                                                        type="number"
                                                        name="card-month"
                                                    />
                                                    <span className="mx-1 text-default-300">/</span>
                                                    <input
                                                        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                                                        min={0}
                                                        minLength={0}
                                                        max={99}
                                                        maxLength={2}
                                                        placeholder="YY"
                                                        type="number"
                                                        name="card-year"
                                                    />
                                                    <input
                                                        className="w-11 rounded-sm bg-transparent text-small outline-none placeholder:text-default-400"
                                                        min={0}
                                                        minLength={0}
                                                        max={999}
                                                        maxLength={3}
                                                        placeholder="CVC"
                                                        type="number"
                                                        name="card-cvc"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                                    data-slot="base"
                                    data-filled="true"
                                    data-filled-within="true"
                                    data-has-elements="true"
                                    data-has-label="true"
                                >
                                    <div data-slot="main-wrapper" className="h-full flex flex-col">
                                        <div
                                            data-slot="input-wrapper"
                                            className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 bg-default-100 data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-default-100 h-unit-10 min-h-unit-10 rounded-medium transition-background motion-reduce:transition-none !duration-150 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background"
                                            style={{ cursor: "text" }}
                                        >
                                            <label
                                                data-slot="label"
                                                className="absolute pointer-events-none origin-top-left subpixel-antialiased block text-foreground-500 will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-foreground group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden"
                                                id="react-aria1714968914-:r2i:"
                                                htmlFor="react-aria1714968914-:r2h:"
                                            >
                                                Cardholder name
                                            </label>
                                            <div
                                                data-slot="inner-wrapper"
                                                className="inline-flex w-full items-center h-full box-border"
                                            >
                                                <input
                                                    data-slot="input"
                                                    className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small group-data-[has-value=true]:text-default-foreground h-full"
                                                    aria-label="Cardholder name"
                                                    placeholder="Cardholder name"
                                                    id="react-aria1714968914-:r2h:"
                                                    aria-labelledby="react-aria1714968914-:r2h: react-aria1714968914-:r2i:"
                                                    type="text"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="mt-4">
                                <legend className="pb-2 text-foreground-500">Billing address</legend>
                                <label
                                    className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
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
                                            aria-label="Same as shipping address"
                                            aria-labelledby=":r2m:"
                                            type="checkbox"
                                            defaultValue=""
                                            defaultChecked=""
                                        />
                                    </div>
                                    <span
                                        aria-hidden="true"
                                        className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 mr-2 rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)] after:rounded-[calc(theme(borderRadius.medium)*0.6)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            role="presentation"
                                            viewBox="0 0 17 18"
                                            className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity motion-reduce:transition-none"
                                        >
                                            <polyline
                                                fill="none"
                                                points="1 9 7 14 15 4"
                                                stroke="currentColor"
                                                strokeDasharray={22}
                                                strokeDashoffset={44}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                style={{ transition: "stroke-dashoffset 250ms linear 0.2s" }}
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        id=":r2m:"
                                        className="relative text-foreground select-none text-medium transition-colors-opacity before:transition-width motion-reduce:transition-none"
                                    >
                                        Same as shipping address
                                    </span>
                                </label>
                                <span
                                    aria-hidden="true"
                                    className="w-px h-px block"
                                    style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}
                                />
                            </fieldset>
                        </form>
                    </div>
                    <div className="w-full rounded-medium bg-content2 px-2 py-4 dark:bg-content1 md:px-6 md:py-8 lg:w-[340px] lg:flex-none">
                        <div>
                            <h2 className="font-medium text-default-500">Your Order</h2>
                            <hr
                                className="shrink-0 bg-divider border-none w-full h-divider mt-4"
                                role="separator"
                            />
                            <h3 className="sr-only">Items in your cart</h3>
                            <ul>
                                <li className="flex items-center gap-x-4 border-divider py-4" id={1}>
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                        <div
                                            className="relative shadow-black/5 shadow-none rounded-large"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            {" "}
                                            <img
                                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/1.png"
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                alt="Training shoes"
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h4 className="text-small">
                                            <a
                                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                tabIndex={0}
                                                role="link"
                                                href="#"
                                            >
                                                Training shoes
                                            </a>
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <p>
                                                <span className="text-small text-default-500">Color: </span>
                                                <span className="text-small font-medium capitalize text-default-700">
                                                    black
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text-small text-default-500">Size: </span>
                                                <span className="text-small font-medium text-default-700">
                                                    42
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-small font-semibold text-default-700">
                                                $49.99
                                            </span>
                                            <span className="text-small text-default-500">x 1</span>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover h-7 w-7 min-w-[1.5rem]"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--lucide"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 6L6 18M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center gap-x-4 border-divider py-4" id={2}>
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                        <div
                                            className="relative shadow-black/5 shadow-none rounded-large"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            {" "}
                                            <img
                                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/2.png"
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                alt="Sneakers"
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h4 className="text-small">
                                            <a
                                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                tabIndex={0}
                                                role="link"
                                                href="#"
                                            >
                                                Sneakers
                                            </a>
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <p>
                                                <span className="text-small text-default-500">Color: </span>
                                                <span className="text-small font-medium capitalize text-default-700">
                                                    red
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text-small text-default-500">Size: </span>
                                                <span className="text-small font-medium text-default-700">
                                                    42
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-small font-semibold text-default-700">
                                                $29.99
                                            </span>
                                            <span className="text-small text-default-500">x 1</span>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover h-7 w-7 min-w-[1.5rem]"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--lucide"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 6L6 18M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center gap-x-4 border-divider py-4" id={3}>
                                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center">
                                        <div
                                            className="relative shadow-black/5 shadow-none rounded-large"
                                            style={{ maxWidth: "fit-content" }}
                                        >
                                            {" "}
                                            <img
                                                src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/3.png"
                                                className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                                                alt="Running shoes"
                                                data-loaded="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h4 className="text-small">
                                            <a
                                                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium hover:underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 font-medium text-foreground"
                                                tabIndex={0}
                                                role="link"
                                                href="#"
                                            >
                                                Running shoes
                                            </a>
                                        </h4>
                                        <div className="flex items-center gap-3">
                                            <p>
                                                <span className="text-small text-default-500">Color: </span>
                                                <span className="text-small font-medium capitalize text-default-700">
                                                    blue
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text-small text-default-500">Size: </span>
                                                <span className="text-small font-medium text-default-700">
                                                    42
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="text-small font-semibold text-default-700">
                                                $39.99
                                            </span>
                                            <span className="text-small text-default-500">x 2</span>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-unit-2 rounded-full px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default/40 text-default-foreground data-[hover=true]:opacity-hover h-7 w-7 min-w-[1.5rem]"
                                        type="button"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            aria-hidden="true"
                                            role="img"
                                            className="iconify iconify--lucide"
                                            width={14}
                                            height={14}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 6L6 18M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                            <div>
                                <form className="mb-4 mt-6 flex items-end gap-2">
                                    <div
                                        className="group flex flex-col w-full group relative justify-end data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
                                        data-slot="base"
                                        data-filled="true"
                                        data-filled-within="true"
                                        data-has-elements="true"
                                        data-has-label="true"
                                    >
                                        <div data-slot="main-wrapper" className="h-full flex flex-col">
                                            <div
                                                data-slot="input-wrapper"
                                                className="relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3 border-medium border-default-200 data-[hover=true]:border-default-400 h-unit-10 min-h-unit-10 rounded-medium transition-background !duration-150 group-data-[focus=true]:border-primary transition-colors motion-reduce:transition-none bg-background"
                                                style={{ cursor: "text" }}
                                            >
                                                <label
                                                    data-slot="label"
                                                    className="absolute pointer-events-none origin-top-left subpixel-antialiased block will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:pointer-events-auto pb-0 z-20 top-1/2 -translate-y-1/2 group-data-[filled-within=true]:left-0 left-3 text-small group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)] pe-2 max-w-full text-ellipsis overflow-hidden text-default-700"
                                                    id="react-aria1714968914-:r2u:"
                                                    htmlFor="react-aria1714968914-:r2t:"
                                                >
                                                    Coupon code
                                                </label>
                                                <div
                                                    data-slot="inner-wrapper"
                                                    className="inline-flex w-full items-center h-full box-border"
                                                >
                                                    <input
                                                        data-slot="input"
                                                        className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small h-full"
                                                        aria-label="Coupon code"
                                                        placeholder="Enter coupon code"
                                                        id="react-aria1714968914-:r2t:"
                                                        aria-labelledby="react-aria1714968914-:r2t: react-aria1714968914-:r2u:"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground data-[hover=true]:opacity-hover"
                                        type="submit"
                                    >
                                        Apply
                                    </button>
                                </form>
                                <dl className="flex flex-col gap-4 py-4">
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Subtotal</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $159.96
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Delivery</dt>
                                        <dd className="text-small font-semibold text-default-700">$0.00</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Tax</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $23.99
                                        </dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="text-small text-default-500">Discount</dt>
                                        <dd className="text-small font-semibold text-success"> - $10.99</dd>
                                    </div>
                                    <hr
                                        className="shrink-0 bg-divider border-none w-full h-divider"
                                        role="separator"
                                    />
                                    <div className="flex justify-between">
                                        <dt className="text-small font-semibold text-default-500">Total</dt>
                                        <dd className="text-small font-semibold text-default-700">
                                            $172.96
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-small w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover"
                                type="button"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </PageLayout>
    );
}