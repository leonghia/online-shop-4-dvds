import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

export default function CustomNavbar() {
    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Music
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Movies
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Games
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        News
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Forum
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitcher />
                <NavbarItem className="hidden lg:flex">
                    <Link href="/auth/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/auth/register" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
