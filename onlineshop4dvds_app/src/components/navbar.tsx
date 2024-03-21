import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Badge,
    Image
} from "@nextui-org/react";
import { Acme } from "./icons/brands";
import { HiOutlineShoppingCart, HiOutlineHeart, HiOutlineBell } from "react-icons/hi2";
import { useCart, useCartDispatch } from "@/contexts/cart-context";
import { useCookies } from "react-cookie";
import { API_URL } from "@/config";
import { Cart } from "@/models/cart";
import { Avatar } from "@nextui-org/react";
import { FaUser } from "react-icons/fa6";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

export default function MyNavbar() {
    const [cookies, setCookie] = useCookies(["cartId"]);
    const { user, error, isLoading } = useUser();

    const cart = useCart();
    const dispatch = useCartDispatch();

    useEffect(() => {
        if (cart) return;
        if (!cookies.cartId) {
            dispatch && dispatch({ payload: null });
            return;
        }
        fetch(`${API_URL}/cart/${cookies.cartId}`)
            .then(res => res.json())
            .then((data: Cart) => dispatch && dispatch({ payload: data }))
            .catch(err => console.error(err));
    }, []);

    if (user) {
        return (
            <Navbar height="54px" classNames={{
                base: "flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 py-4 backdrop-filter-none bg-transparent",
                wrapper: "z-40 flex gap-4 flex-row relative flex-nowrap items-center max-w-[1024px] px-0 w-full justify-center bg-transparent",
                content: "flex h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 gap-6 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50",
                brand: "flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border mr-2 w-[40vw] md:w-auto md:max-w-fit",
                item: [
                    "data-[active=true]:opacity-100"
                ]
            }}>
                <NavbarContent justify="center">
                    <NavbarBrand>
                        <div className="rounded-full bg-foreground text-background">
                            <Acme width={34} height={34} />
                        </div>
                    </NavbarBrand>
                    <NavbarItem className="hidden md:flex opacity-60">
                        <Link href="/" color="foreground">Home</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex opacity-50">
                        <Link href="/music" color="foreground" >Music</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex opacity-50">
                        <Link href="/movies" color="foreground">Movies</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex opacity-50">
                        <Link href="/games" color="foreground">Games</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex opacity-50">
                        <Link href="/news" color="foreground">News</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex opacity-50">
                        <Link href="/forum" color="foreground">Forum</Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex">
                        {false ? (<Badge color="danger" size="sm" content={0} shape="circle">
                            <HiOutlineHeart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />
                        </Badge>) : (<HiOutlineHeart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />)}
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex">
                        <Link href="/cart">
                            {cart?.items.length ? (<Badge color="danger" size="sm" content={cart?.items?.length || 0} shape="circle">
                                <HiOutlineShoppingCart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />
                            </Badge>) : (<HiOutlineShoppingCart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />)}
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex">
                        <HiOutlineBell className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />
                    </NavbarItem>
                    <NavbarItem>
                        {user.picture ? (
                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <Avatar isBordered as="button" src={user.picture} className="transition-transform" />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="info">
                                        <User
                                            name={user.name}
                                            description={user.email}
                                            avatarProps={user.picture ? { src: user.picture, size: "sm" } : { size: "sm", showFallback: true, fallback: <FaUser className="w-5 h-5 text-default-500" fill="currentColor" /> }}
                                        />
                                    </DropdownItem>
                                    <DropdownItem key="profile">Your Profile</DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        <a href="/api/auth/logout">Logout</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>) : (
                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <Avatar isBordered as="button" className="transition-transform" showFallback fallback={
                                        <FaUser className="w-5 h-5 text-default-500" fill="currentColor" />
                                    } />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="info">
                                        <User
                                            name={user.name}
                                            description={user.email}
                                            avatarProps={user.picture ? { src: user.picture, size: "sm" } : { size: "sm", showFallback: true, fallback: <FaUser className="w-5 h-5 text-default-500" fill="currentColor" /> }}
                                        />
                                    </DropdownItem>
                                    <DropdownItem key="profile">Your Profile</DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        <a href="/api/auth/logout">Log Out</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>)}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        );
    }

    return (
        <Navbar height="54px" classNames={{
            base: "flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 py-4 backdrop-filter-none bg-transparent",
            wrapper: "z-40 flex gap-4 flex-row relative flex-nowrap items-center max-w-[1024px] px-0 w-full justify-center bg-transparent",
            content: "flex h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 gap-6 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50",
            brand: "flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border mr-2 w-[40vw] md:w-auto md:max-w-fit",
            item: [
                "data-[active=true]:opacity-100"
            ]
        }}>
            <NavbarContent justify="center">
                <NavbarBrand>
                    <div className="rounded-full bg-foreground text-background">
                        <Acme width={34} height={34} />
                    </div>
                </NavbarBrand>
                <NavbarItem className="hidden md:flex opacity-60">
                    <Link href="/" color="foreground">Home</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/music" color="foreground" >Music</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/movies" color="foreground">Movies</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/games" color="foreground">Games</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/news" color="foreground">News</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex opacity-50">
                    <Link href="/forum" color="foreground">Forum</Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Link href="/cart">
                        {cart?.items.length ? (<Badge color="danger" size="sm" content={cart?.items?.length || 0} shape="circle">
                            <HiOutlineShoppingCart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />
                        </Badge>) : (<HiOutlineShoppingCart className="w-6 h-6 text-default-500 cursor-pointer hover:text-default-600" />)}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <a href="/api/auth/login">
                        <Button color="primary" variant="solid" radius="full" className="font-medium">Login</Button>
                    </a>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
