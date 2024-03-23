import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Badge,
    Input
} from "@nextui-org/react";
import { Acme } from "./icons/brands";
import { HiOutlineShoppingCart, HiOutlineHeart, HiOutlineBell, HiMagnifyingGlass, HiChevronRight } from "react-icons/hi2";
import { useCart, useCartDispatch } from "@/contexts/cart-context";
import { useCookies } from "react-cookie";
import { API_URL } from "@/config";
import { Cart } from "@/models/cart";
import { Avatar } from "@nextui-org/react";
import { FaUser } from "react-icons/fa6";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyNavbar() {
    const [cookies, setCookie] = useCookies(["cartId"]);
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const isHomepage = router.pathname === "/";

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
            <Navbar maxWidth="full" isBordered={!isHomepage} isBlurred={isHomepage}>
                <NavbarBrand>
                    <Acme width={34} height={34} />
                    <p className="font-bold text-inherit text-small">ONLINESHOP4DVDS</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link className="text-default-500 text-small font-medium" href="/">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-default-500 text-small font-medium" href="/">Albums</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-default-500 text-small font-medium" href="/">Movies</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-default-500 text-small font-medium" href="/">Games</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="text-default-500 text-small font-medium" href="/">News</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Input type="text" labelPlacement="outside" placeholder="Search for DVD..." startContent={<HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="flex items-center">
                        <Link href="/favorites"><HiOutlineHeart className="w-6 h-6 text-default-500" /></Link>
                    </NavbarItem>
                    <NavbarItem className="flex items-center">
                        <Link href="/cart"><HiOutlineShoppingCart className="w-6 h-6 text-default-500" /></Link>
                    </NavbarItem>
                    <NavbarItem className="flex items-center">
                        <Link href="/favorites"><HiOutlineBell className="w-6 h-6 text-default-500" /></Link>
                    </NavbarItem>
                    <NavbarItem>
                        {user.picture ? (
                            <Dropdown placement="bottom-start">
                                <DropdownTrigger>
                                    <Avatar isBordered as="button" src={user.picture} className="transition-transform" />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="info" textValue="info">
                                        <User
                                            name={user.name}
                                            description={user.email}
                                            avatarProps={user.picture ? { src: user.picture, size: "sm" } : { size: "sm", showFallback: true, fallback: <FaUser className="w-5 h-5 text-default-500" fill="currentColor" /> }}
                                        />
                                    </DropdownItem>
                                    <DropdownItem key="profile" href="/profile" textValue="profile">My Profile</DropdownItem>
                                    <DropdownItem key="orders" href="/orders" textValue="orders">Orders History</DropdownItem>
                                    <DropdownItem key="logout" color="danger" textValue="logout" href="/api/auth/logout">Logout</DropdownItem>
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
                                    <DropdownItem key="profile" href="/profile" textValue="profile">My Profile</DropdownItem>
                                    <DropdownItem key="orders" href="/orders" textValue="orders">Orders History</DropdownItem>
                                    <DropdownItem key="logout" color="danger" textValue="logout" href="/api/auth/logout">Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>)}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        );
    }

    return (
        <Navbar maxWidth="full" isBordered={!isHomepage} isBlurred={isHomepage}>
            <NavbarBrand>
                <Acme width={34} height={34} />
                <p className="font-bold text-inherit text-small">ONLINESHOP4DVDS</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-default-500 text-small font-medium" href="/">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500 text-small font-medium" href="/">Albums</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500 text-small font-medium" href="/">Movies</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500 text-small font-medium" href="/">Games</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-default-500 text-small font-medium" href="/">News</Link>
                </NavbarItem>
                <NavbarItem>
                    <Input type="text" labelPlacement="outside" placeholder="Search for DVD..." startContent={<HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex items-center">
                    <Link href="/cart"><HiOutlineShoppingCart className="w-6 h-6 text-default-500" /></Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/api/auth/login" className="font-medium" endContent={<HiChevronRight />}>
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
