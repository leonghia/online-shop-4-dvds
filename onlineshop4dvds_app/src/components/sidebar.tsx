import { useUser } from "@auth0/nextjs-auth0/client";

export default function Sidebar() {
    const { user, error, isLoading } = useUser();

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
                <div className="flex items-center gap-3 px-4">
                    <span
                        tabIndex={-1}
                        className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-8 h-8 text-tiny bg-default text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default"
                    >
                        <img
                            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                            className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                            alt="avatar"
                            data-loaded="true"
                        />
                    </span>
                    <div className="flex flex-col">
                        <p className="text-small font-medium text-default-600">John Doe</p>
                        <p className="text-tiny text-default-400">Product Designer</p>
                    </div>
                </div>
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
                                role="option"
                                aria-selected="true"
                                aria-labelledby="react-aria3593661821-:r4:"
                                href="/home"
                                tabIndex={-1}
                                data-key="home"
                                id="react-aria3593661821-:r0:-option-home"
                                
                                title="Home"
                                data-selectable="true"
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
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:r6:"
                                href="/projects"
                                tabIndex={-1}
                                data-key="projects"
                                id="react-aria3593661821-:r0:-option-projects"
                                
                                title="Projects"
                                data-selectable="true"
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
                                        d="M17.448 1.75c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.104c0 .898 0 1.648.08 2.242c.084.628.27 1.195.726 1.65c.455.456 1.022.642 1.65.726c.594.08 1.343.08 2.242.08h.104c.899 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.344.08-2.242v-.104c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.343-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3c.13.13.237.327.3.788c.064.483.066 1.131.066 2.095c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789c-.13.13-.327.237-.788.3c-.483.064-1.131.066-2.095.066c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3c-.13-.13-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095c0-.964.002-1.612.066-2.095c.063-.461.17-.659.3-.789M6.448 12.75c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.726c-.456.455-.642 1.022-.726 1.65c-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242c.084.628.27 1.195.725 1.65c.456.456 1.023.642 1.65.726c.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08c.628-.084 1.195-.27 1.65-.726c.456-.455.642-1.022.726-1.65c.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zm-2.832 1.866c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789c-.13.13-.327.237-.788.3c-.483.064-1.131.066-2.095.066c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3c-.13-.13-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M6.5 3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m6.25 14.25a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span
                                    id="react-aria3593661821-:r6:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Projects
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="text-default-400 iconify iconify--solar"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx={12} cy={12} r={10} opacity=".5" />
                                        <path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
                                    </g>
                                </svg>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:r8:"
                                href="/tasks"
                                tabIndex={-1}
                                data-key="tasks"
                                id="react-aria3593661821-:r0:-option-tasks"
                                
                                title="Tasks"
                                data-selectable="true"
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
                                    Tasks
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="text-default-400 iconify iconify--solar"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx={12} cy={12} r={10} opacity=".5" />
                                        <path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
                                    </g>
                                </svg>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:ra:"
                                href="/team"
                                tabIndex={-1}
                                data-key="team"
                                id="react-aria3593661821-:r0:-option-team"
                                
                                title="Team"
                                data-selectable="true"
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
                                        d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M18 3.25a.75.75 0 0 0 0 1.5c1.377 0 2.25.906 2.25 1.75S19.377 8.25 18 8.25a.75.75 0 0 0 0 1.5c1.937 0 3.75-1.333 3.75-3.25S19.937 3.25 18 3.25M6.75 4A.75.75 0 0 0 6 3.25c-1.937 0-3.75 1.333-3.75 3.25S4.063 9.75 6 9.75a.75.75 0 0 0 0-1.5c-1.376 0-2.25-.906-2.25-1.75S4.624 4.75 6 4.75A.75.75 0 0 0 6.75 4"
                                    />
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M12 12.25c-1.784 0-3.434.48-4.659 1.297c-1.22.814-2.091 2.02-2.091 3.453c0 1.433.871 2.64 2.091 3.453c1.225.816 2.875 1.297 4.659 1.297c1.784 0 3.434-.48 4.659-1.297c1.22-.814 2.091-2.02 2.091-3.453c0-1.433-.872-2.64-2.091-3.453c-1.225-.816-2.875-1.297-4.659-1.297M6.75 17c0-.776.472-1.57 1.423-2.204c.947-.631 2.298-1.046 3.827-1.046c1.53 0 2.88.415 3.827 1.046c.951.634 1.423 1.428 1.423 2.204c0 .776-.472 1.57-1.423 2.204c-.947.631-2.298 1.046-3.827 1.046c-1.53 0-2.88-.415-3.827-1.046C7.222 18.57 6.75 17.776 6.75 17"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M19.267 13.84a.75.75 0 0 1 .894-.573c.961.211 1.828.592 2.472 1.119c.643.526 1.117 1.25 1.117 2.114c0 .865-.474 1.588-1.117 2.114c-.644.527-1.51.908-2.472 1.119a.75.75 0 0 1-.322-1.466c.793-.173 1.426-.472 1.844-.814c.418-.342.567-.677.567-.953c0-.276-.149-.61-.567-.953c-.418-.342-1.051-.64-1.844-.814a.75.75 0 0 1-.572-.894M3.84 13.267a.75.75 0 1 1 .32 1.466c-.792.173-1.425.472-1.843.814c-.418.342-.567.677-.567.953c0 .276.149.61.567.953c.418.342 1.051.64 1.844.814a.75.75 0 0 1-.322 1.466c-.962-.211-1.828-.592-2.472-1.119C.724 18.088.25 17.364.25 16.5c0-.865.474-1.588 1.117-2.114c.644-.527 1.51-.908 2.472-1.119"
                                    />
                                </svg>
                                <span
                                    id="react-aria3593661821-:ra:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Team
                                </span>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:rc:"
                                href="/tracker"
                                tabIndex={-1}
                                data-key="tracker"
                                id="react-aria3593661821-:r0:-option-tracker"
                                
                                title="Tracker"
                                data-selectable="true"
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
                                        <path strokeLinecap="round" d="M10 7H2m6 5H2m8 5H2" />
                                        <circle cx={17} cy={12} r={5} />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 10v1.846L18 13"
                                        />
                                    </g>
                                </svg>
                                <span
                                    id="react-aria3593661821-:rc:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Tracker
                                </span>
                                <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-6 text-tiny rounded-full bg-default/40 text-default-foreground">
                                    <span className="flex-1 text-inherit font-normal px-1">
                                        New
                                    </span>
                                </div>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:re:"
                                href="/analytics"
                                tabIndex={-1}
                                data-key="analytics"
                                id="react-aria3593661821-:r0:-option-analytics"
                                
                                title="Analytics"
                                data-selectable="true"
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
                                        d="M12.05 1.25h-.1c-.664 0-1.237 0-1.696.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v2.427a2.246 2.246 0 0 0-.75-.128h-3A2.25 2.25 0 0 0 2.25 9.5v11.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25V14.5a2.25 2.25 0 0 0-2.25-2.25h-3c-.263 0-.515.045-.75.128V4.951c0-.665 0-1.238-.062-1.697c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597c-.459-.062-1.032-.062-1.697-.062m8.2 20V14.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75zm-6 0V5c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484c-.057-.057-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048c-.728 0-1.2.002-1.546.048c-.325.044-.427.115-.484.172c-.057.057-.128.159-.172.484c-.046.347-.048.818-.048 1.546v16.25zm-6 0V9.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v11.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span
                                    id="react-aria3593661821-:re:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Analytics
                                </span>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:rg:"
                                href="/perks"
                                tabIndex={-1}
                                data-key="perks"
                                id="react-aria3593661821-:r0:-option-perks"
                                
                                title="Perks"
                                data-selectable="true"
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
                                        <path
                                            strokeLinecap="round"
                                            d="M22 12H2M12 2v20m1-10a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4"
                                        />
                                        <path d="M12 10.035a3.247 3.247 0 0 1 2.46-3.15c1.603-.4 3.056 1.052 2.655 2.656a3.247 3.247 0 0 1-3.15 2.46H12zm0 0a3.247 3.247 0 0 0-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656a3.247 3.247 0 0 0 3.15 2.46H12z" />
                                        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                                    </g>
                                </svg>
                                <span
                                    id="react-aria3593661821-:rg:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Perks
                                </span>
                                <div className="relative max-w-fit inline-flex items-center box-border whitespace-nowrap text-tiny rounded-full bg-default/40 text-default-foreground w-5 h-5 min-w-unit-5 min-h-5 px-0 justify-center">
                                    <span className="text-inherit font-normal px-0 flex-none">
                                        3
                                    </span>
                                </div>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:ri:"
                                href="/expenses"
                                tabIndex={-1}
                                data-key="expenses"
                                id="react-aria3593661821-:r0:-option-expenses"
                                
                                title="Expenses"
                                data-selectable="true"
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
                                        d="M7.099 1.25H16.9c1.017 0 1.717 0 2.306.204a3.796 3.796 0 0 1 2.348 2.412l-.713.234l.713-.234c.196.597.195 1.307.195 2.36v14.148c0 1.466-1.727 2.338-2.864 1.297a.196.196 0 0 0-.271 0l-.484.442c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0l-.483-.442a.196.196 0 0 0-.272 0c-1.137 1.04-2.864.169-2.864-1.297V6.227c0-1.054 0-1.764.195-2.361a3.795 3.795 0 0 1 2.348-2.412c.59-.205 1.289-.204 2.306-.204m.146 1.5c-1.221 0-1.642.01-1.96.121A2.296 2.296 0 0 0 3.87 4.334c-.111.338-.12.784-.12 2.036v14.004c0 .12.059.192.134.227a.2.2 0 0 0 .11.018a.194.194 0 0 0 .107-.055a1.695 1.695 0 0 1 2.296 0l.483.442a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0a2.407 2.407 0 0 1 3.262 0a.907.907 0 0 0 1.238 0l.483-.442a1.695 1.695 0 0 1 2.296 0c.043.04.08.052.108.055a.2.2 0 0 0 .109-.018c.075-.035.135-.108.135-.227V6.37c0-1.252-.01-1.698-.12-2.037a2.296 2.296 0 0 0-1.416-1.462c-.317-.11-.738-.12-1.959-.12zM6.25 7.5A.75.75 0 0 1 7 6.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 11a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span
                                    id="react-aria3593661821-:ri:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Expenses
                                </span>
                            </a>
                            <a
                                role="option"
                                aria-selected="false"
                                aria-labelledby="react-aria3593661821-:rk:"
                                href="/settings"
                                tabIndex={-1}
                                data-key="settings"
                                id="react-aria3593661821-:r0:-option-settings"
                                
                                title="Settings"
                                data-selectable="true"
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
                                    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                        <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" />
                                        <path d="M11.975 1.25c-.445 0-.816 0-1.12.02a2.823 2.823 0 0 0-.907.19a2.75 2.75 0 0 0-1.489 1.488c-.145.35-.184.72-.2 1.122a.868.868 0 0 1-.415.731a.868.868 0 0 1-.841-.005c-.356-.188-.696-.339-1.072-.389a2.75 2.75 0 0 0-2.033.545a2.83 2.83 0 0 0-.617.691c-.17.254-.356.575-.578.96l-.025.044c-.223.385-.408.706-.542.98c-.14.286-.25.568-.29.88a2.75 2.75 0 0 0 .544 2.033c.231.301.532.52.872.734a.868.868 0 0 1 .426.726a.868.868 0 0 1-.426.726c-.34.214-.64.433-.872.734a2.75 2.75 0 0 0-.545 2.033c.041.312.15.594.29.88c.135.274.32.595.543.98l.025.044c.222.385.408.706.578.96c.177.263.367.5.617.69a2.75 2.75 0 0 0 2.033.546c.376-.05.716-.2 1.072-.389a.867.867 0 0 1 .84-.005a.863.863 0 0 1 .417.731c.015.402.054.772.2 1.122a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188c.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02c.318-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.145-.35.184-.72.2-1.122a.868.868 0 0 1 .415-.732a.868.868 0 0 1 .841.006c.356.188.696.339 1.072.388a2.75 2.75 0 0 0 2.033-.544c.25-.192.44-.428.617-.691c.17-.254.356-.575.578-.96l.025-.044c.223-.385.408-.706.542-.98c.14-.286.25-.569.29-.88a2.75 2.75 0 0 0-.544-2.033c-.231-.301-.532-.52-.872-.734a.868.868 0 0 1-.426-.726c0-.278.152-.554.426-.726c.34-.214.64-.433.872-.734a2.75 2.75 0 0 0 .545-2.033a2.826 2.826 0 0 0-.29-.88a17.9 17.9 0 0 0-.543-.98l-.025-.044a18.028 18.028 0 0 0-.578-.96a2.823 2.823 0 0 0-.617-.69a2.75 2.75 0 0 0-2.033-.546c-.376.05-.716.2-1.072.389a.868.868 0 0 1-.84.005a.868.868 0 0 1-.417-.731c-.015-.402-.054-.772-.2-1.122a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021zm-1.453 1.595c.077-.032.194-.061.435-.078c.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.04.096.073.247.086.604c.03.792.439 1.555 1.165 1.974c.726.42 1.591.392 2.292.022c.316-.167.463-.214.567-.227a1.25 1.25 0 0 1 .924.247c.066.051.15.138.285.338c.139.206.299.483.537.895c.238.412.397.69.506.912c.107.217.14.333.15.416a1.25 1.25 0 0 1-.247.924c-.064.083-.178.187-.48.377c-.672.422-1.128 1.158-1.128 1.996c0 .838.456 1.574 1.128 1.996c.302.19.416.294.48.377c.202.263.29.595.247.924c-.01.083-.044.2-.15.416c-.109.223-.268.5-.506.912c-.238.412-.399.689-.537.895c-.135.2-.219.287-.285.338a1.25 1.25 0 0 1-.924.247c-.104-.013-.25-.06-.567-.227c-.7-.37-1.566-.398-2.292.021c-.726.42-1.135 1.183-1.165 1.975c-.013.357-.046.508-.086.604a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.04-.096-.073-.247-.086-.604c-.03-.792-.439-1.555-1.165-1.974c-.726-.42-1.591-.392-2.292-.022c-.316.167-.463.214-.567.227a1.25 1.25 0 0 1-.924-.247c-.066-.051-.15-.138-.285-.338a17.055 17.055 0 0 1-.537-.895c-.238-.412-.397-.69-.506-.912c-.107-.217-.14-.333-.15-.416a1.25 1.25 0 0 1 .247-.924c.064-.083.178-.187.48-.377c.672-.422 1.128-1.158 1.128-1.996c0-.838-.456-1.574-1.128-1.996c-.302-.19-.416-.294-.48-.377a1.25 1.25 0 0 1-.247-.924c.01-.083.044-.2.15-.416c.109-.223.268-.5.506-.912c.238-.412.399-.689.537-.895c.135-.2.219-.287.285-.338a1.25 1.25 0 0 1 .924-.247c.104.013.25.06.567.227c.7.37 1.566.398 2.292-.022c.726-.419 1.135-1.182 1.165-1.974c.013-.357.046-.508.086-.604c.127-.307.37-.55.677-.677" />
                                    </g>
                                </svg>
                                <span
                                    id="react-aria3593661821-:rk:"
                                    data-label="true"
                                    className="flex-1 text-small truncate font-medium text-default-500 group-data-[selected=true]:text-foreground"
                                >
                                    Settings
                                </span>
                            </a>
                        </nav>
                    </div>
                    
                </div>
                <div className="mt-auto flex flex-col">
                    <button
                        className="z-0 group relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium w-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/40 justify-start text-default-500 data-[hover=true]:text-foreground"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="text-default-500 iconify iconify--solar"
                            focusable="false"
                            tabIndex={-1}
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            <g fill="none">
                                <circle
                                    cx={12}
                                    cy={12}
                                    r={10}
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    opacity=".5"
                                />
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    d="M12 17v-6"
                                />
                                <circle
                                    cx={1}
                                    cy={1}
                                    r={1}
                                    fill="currentColor"
                                    transform="matrix(1 0 0 -1 11 9)"
                                />
                            </g>
                        </svg>
                        Help &amp; Information
                    </button>
                    <button
                        className="z-0 group relative inline-flex items-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/40 justify-start text-default-500 data-[hover=true]:text-foreground"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            className="rotate-180 text-default-500 iconify iconify--solar"
                            focusable="false"
                            tabIndex={-1}
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >
                            <g fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx={12} cy={12} r={10} opacity=".5" />
                                <path strokeLinecap="round" d="M15 12H9" />
                            </g>
                        </svg>
                        Log Out
                    </button>
                </div>
            </div>
        </aside>
    );
}
