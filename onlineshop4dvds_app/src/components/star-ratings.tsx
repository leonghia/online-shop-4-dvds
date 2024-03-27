import { cn } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";

export default function StarRatings({ ratings, className }: { ratings: number | null | undefined, className?: string }) {
    if (!ratings || ratings < 1)
        return (
            <>
                <FaStar data-rating="1" className={cn("text-default", className)} />
                <FaStar data-rating="2" className={cn("text-default", className)} />
                <FaStar data-rating="3" className={cn("text-default", className)} />
                <FaStar data-rating="4" className={cn("text-default", className)} />
                <FaStar data-rating="5" className={cn("text-default", className)} />
            </>
        );
    if (ratings < 2)
        return (
            <>
                <FaStar data-rating="1" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="2" className={cn("text-default", className)} />
                <FaStar data-rating="3" className={cn("text-default", className)} />
                <FaStar data-rating="4" className={cn("text-default", className)} />
                <FaStar data-rating="5" className={cn("text-default", className)} />
            </>
        );
    if (ratings < 3)
        return (
            <>
                <FaStar data-rating="1" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="2" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="3" className={cn("text-default", className)} />
                <FaStar data-rating="4" className={cn("text-default", className)} />
                <FaStar data-rating="5" className={cn("text-default", className)} />
            </>
        );
    if (ratings < 4)
        return (
            <>
                <FaStar data-rating="1" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="2" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="3" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="4" className={cn("text-default", className)} />
                <FaStar data-rating="5" className={cn("text-default", className)} />
            </>
        );
    if (ratings < 5)
        return (
            <>
                <FaStar data-rating="1" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="2" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="3" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="4" className={cn("text-yellow-500", className)} />
                <FaStar data-rating="5" className={cn("text-default", className)} />
            </>
        );
    return (
        <>
            <FaStar data-rating="1" className={cn("text-yellow-500", className)} />
            <FaStar data-rating="2" className={cn("text-yellow-500", className)} />
            <FaStar data-rating="3" className={cn("text-yellow-500", className)} />
            <FaStar data-rating="4" className={cn("text-yellow-500", className)} />
            <FaStar data-rating="5" className={cn("text-yellow-500", className)} />
        </>
    );
}