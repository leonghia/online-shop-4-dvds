import { Skeleton } from "@nextui-org/react";

export default function ProductCardVer2Skeleton() {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 p-4 rounded-none bg-transparent shadow-none w-full snap-start"
            color="black"
        >
            <Skeleton className="rounded-medium h-52" disableAnimation>              
            </Skeleton>
            <div className="flex flex-col gap-3 px-1">
                <Skeleton className="rounded-medium h-6" disableAnimation>
                </Skeleton>
                <Skeleton className="rounded-medium h-5 w-1/2" disableAnimation>
                </Skeleton>
                <Skeleton className="rounded-medium h-10" disableAnimation>
                </Skeleton>            
            </div>
        </div>

    );
}