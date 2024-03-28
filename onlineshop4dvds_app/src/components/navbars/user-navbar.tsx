import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Badge
} from "@nextui-org/react";
import { Acme } from "../icons/brands";
import { HiOutlineShoppingCart, HiOutlineBell, HiChevronRight } from "react-icons/hi2";
import { useCookies } from "react-cookie";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AvatarDropdown from "../avatar-dropdown";
import SearchModal from "../search-modal";
import { useClientCart, useClientCartDispatch } from "@/contexts/client-cart-context";
import { ClientCart } from "@/models/cart";


export default function UserNavbar() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    const isHomepage = router.pathname === "/";

    const cart = useClientCart();
    const dispatch = useClientCartDispatch();

    useEffect(() => {
        if (cart) return;
        if (localStorage.getItem("cart")) {
            try {
                dispatch && dispatch({payload: JSON.parse(localStorage.getItem("cart")!) as ClientCart});
            } catch (err) {
                dispatch && dispatch({payload: null});
            }
        } else {
            dispatch && dispatch({payload: null});
        }
    }, []);

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
                    <Link className="text-default-500 text-small font-medium" href="/products">All Products</Link>
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
                    <SearchModal />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex items-center">
                    <Link href="/cart">
                        <Badge content={cart?.items.length} color="danger">
                            <HiOutlineShoppingCart className="w-6 h-6 text-default-500" />
                        </Badge>
                    </Link>
                </NavbarItem>
                {user ? (
                    <>
                        <NavbarItem className="flex items-center">
                            <HiOutlineBell className="w-6 h-6 text-default-500" />
                        </NavbarItem>
                        <NavbarItem>
                            <AvatarDropdown user={user} />
                        </NavbarItem>
                    </>) : (
                    <>
                        <NavbarItem>
                            <Button as={Link} color="primary" variant="flat" href="/api/auth/login" className="font-medium" endContent={<HiChevronRight />}>
                                Login
                            </Button>
                        </NavbarItem>
                    </>)}
            </NavbarContent>
        </Navbar>
    );
}
