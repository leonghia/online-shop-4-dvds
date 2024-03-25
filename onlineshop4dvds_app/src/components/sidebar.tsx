import { Spacer, cn } from "@nextui-org/react";
import { HiOutlineFolder, HiOutlineDocumentText, HiOutlineCircleStack, HiOutlineUsers } from "react-icons/hi2";
import { Acme } from "./icons/brands";
import { Listbox, ListboxItem } from "@nextui-org/react";

const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";
const itemsClasses = {
    title: "text-default-600",
    base: "py-3"
}

export default function Sidebar({className}: {className?: string}) {

    return (
        <aside className={cn("h-dvh", className)}>
            <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
                <div className="flex items-center gap-2 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <Acme width={36} height={36} className="text-background" />
                    </div>
                    <span className="text-small font-bold uppercase">OnlineShop4DVDS</span>
                </div>
                <Spacer y={6} />
                <Listbox
                    aria-label="Menu"
                    classNames={{base: "py-6", list: "gap-3"}}
                    
                >
                    <ListboxItem key="dashboard" startContent={<HiOutlineFolder className={iconClasses} />} classNames={itemsClasses}>Dashboard</ListboxItem>
                    <ListboxItem key="orders" startContent={<HiOutlineDocumentText className={iconClasses} />} classNames={itemsClasses}>Orders</ListboxItem>
                    <ListboxItem key="products" startContent={<HiOutlineCircleStack className={iconClasses} />} classNames={itemsClasses}>Products</ListboxItem>
                    <ListboxItem key="users" startContent={<HiOutlineUsers className={iconClasses} />} classNames={itemsClasses}>Users</ListboxItem>
                </Listbox>
            </div>
        </aside>
    );
}
