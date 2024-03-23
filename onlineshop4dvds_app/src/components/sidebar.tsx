import { useUser } from "@auth0/nextjs-auth0/client";
import { Button, Link } from "@nextui-org/react";
import { HiOutlineInformationCircle } from "react-icons/hi2";

export default function Sidebar() {

    return (
        <aside className="h-dvh">
            <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
                <div className="flex items-center gap-2 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <svg
                            fill="none"
                            height={36}
                            viewBox="0 0 32 32"
                            width={36}
                            className="text-background"
                        >
                            <path
                                clipRule="evenodd"
                                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="text-small font-bold uppercase">OnlineShop4DVDS</span>
                </div>
                <span
                    aria-hidden="true"
                    className="w-px h-px block"
                    style={{ marginLeft: "0.25rem", marginTop: "3rem" }}
                />
                
                <div
                    className="overflow-y-auto data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] -mr-6 h-full max-h-full py-6 pr-6"
                    data-orientation="vertical"
                    data-top-scroll="false"
                    data-bottom-scroll="false"
                >
                    <div
                        data-slot="base"
                        className="w-full relative flex flex-col gap-1 p-1 list-none"
                    >
                        <nav
                            data-slot="list"
                            className="w-full flex flex-col gap-0.5 outline-none"
                            role="listbox"
                            id="react-aria3593661821-:r0:"
                            tabIndex={0}
                        >
                            <a
                                href="/dashboard"
                                data-selected="true"
                                className="flex group gap-2 items-center justify-between relative py-1.5 w-full box-border subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground px-3 rounded-large h-[44px] data-[selected=true]:bg-default-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="text-default-500 group-data-[selected=true]:text-foreground iconify iconify--solar"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715c.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725z" />
                                        <path strokeLinecap="round" d="M12 15v3" />
                                    </g>
                                </svg>
                                <span
                                    id="react-aria3593661821-:r4:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Home
                                </span>
                            </a>
                            
                            <a
                                href="/dashboard/orders"
                                className="flex group gap-2 items-center justify-between relative py-1.5 w-full box-border subpixel-antialiased cursor-pointer tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:dark:ring-offset-background-content1 data-[hover=true]:transition-colors data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground data-[selectable=true]:focus:bg-default/40 data-[selectable=true]:focus:text-default-foreground px-3 rounded-large h-[44px] data-[selected=true]:bg-default-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="text-default-500 group-data-[selected=true]:text-foreground iconify iconify--solar"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m3.904 3.53a.75.75 0 0 1 .026 1.061l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026M12.25 9a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m-1.733 4.457c.3.286.312.76.026 1.06l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63l2.314-2.43a.75.75 0 0 1 1.06-.026M12.25 16a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span
                                    id="react-aria3593661821-:r8:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Orders
                                </span>
                                
                            </a>
                            
                        </nav>
                    </div>
                    
                </div>
                <div className="mt-auto flex flex-col">        
                    <Button variant="light" startContent={<HiOutlineInformationCircle className="w-6 h-6" />} className="text-default-500 justify-start data-[hover=true]:text-foreground" as={Link} href="/api/auth/logout">Log Out</Button>
                </div>
            </div>
        </aside>
    );
}
