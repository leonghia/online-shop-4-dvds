import { useUser } from "@auth0/nextjs-auth0/client";
import { Input, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { HiMagnifyingGlass, HiOutlineBell } from "react-icons/hi2";
import AvatarDropdown from "../avatar-dropdown";

export default function AdminNavbar() {
    const { user, error, isLoading } = useUser();

    return (
        <Navbar classNames={{base: "bg-transparent backdrop-filter-none justify-end"}}>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Input type="text" labelPlacement="outside" placeholder="Search..." startContent={<HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                </NavbarItem>
                <NavbarItem>
                    <HiOutlineBell className="w-6 h-6 text-default-500" />
                </NavbarItem>
                <NavbarItem>
                    <AvatarDropdown user={user} />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
