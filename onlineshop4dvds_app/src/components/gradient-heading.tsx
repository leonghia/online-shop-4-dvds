import { cn } from "@nextui-org/react";
import { ReactNode } from "react";

const defaultClassName = "from-[#6FEE8D] to-[#17c964]";

export default function GradientHeading({className, children}: {children: ReactNode, className?: string}) {
    return (
        <h2 className={cn(`text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b`, className)}>{children}</h2>
    );
}