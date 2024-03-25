import { APP_URL } from "@/config";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react";
import { FaUser } from "react-icons/fa6";

export default function AvatarDropdown({user}: {user: UserProfile | undefined}) {
    const roles = user?.[`${APP_URL}/roles`] as string[];
    const isAdmin = roles?.includes("Admin");

    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <Avatar isBordered as="button" src={user?.picture!} className="transition-transform" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="info" textValue="info">
                    <User
                        name={user?.name}
                        description={user?.email}
                        avatarProps={user?.picture ? { src: user.picture, size: "sm" } : { size: "sm", showFallback: true, fallback: <FaUser className="w-5 h-5 text-default-500" fill="currentColor" /> }}
                    />
                </DropdownItem>
                <DropdownItem key="profile" href="/profile" textValue="profile">My Profile</DropdownItem>
                {!isAdmin && <DropdownItem key="orders" href="/orders" textValue="orders">Orders History</DropdownItem>}
                <DropdownItem key="logout" color="danger" textValue="logout" href="/api/auth/logout">Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}