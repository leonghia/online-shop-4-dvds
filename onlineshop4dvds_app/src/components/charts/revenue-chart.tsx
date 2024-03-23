import dynamic from "next/dynamic";
import { Button, Select, SelectItem, cn } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { HiMiniFunnel } from "react-icons/hi2";

const Chart = dynamic(
    () => import("../charts/steam").then((mod) => mod.Steam),
    {
        ssr: false,
    }
);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = ["2022", "2023", "2024"];

export default function RevenueChart({className}: {className?: string}) {
    return (
        <div className={cn("h-full flex flex-col gap-2", className)}>
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-primary">Revenue</h3>
                <div className="flex gap-x-2">
                    <Select
                        labelPlacement="outside"
                        className="w-36"
                        placeholder="Select month"
                    >
                        {months.map((month) => (
                            <SelectItem key={month} value={month}>
                                {month}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        labelPlacement="outside"
                        className="w-36"
                        placeholder="Select year"
                    >
                        {years.map((year) => (
                            <SelectItem key={year} value={year}>
                                {year}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
                <Chart />
            </div>
        </div>
    );
}