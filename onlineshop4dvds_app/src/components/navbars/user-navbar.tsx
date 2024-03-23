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
import { Acme } from "../icons/brands";
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
import AvatarDropdown from "../avatar-dropdown";

export default function UserNavbar() {
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
                        <HiOutlineBell className="w-6 h-6 text-default-500" />
                    </NavbarItem>
                    <NavbarItem>
                        <AvatarDropdown user={user} />
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