import dynamic from "next/dynamic";
import { Button, Select, SelectItem, cn } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { HiMiniFunnel } from "react-icons/hi2";

const Chart = dynamic(
    () => import("./revenue").then((mod) => mod.Revenue),
    {
        ssr: false,
    }
);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = ["2022", "2023", "2024"];

const now = new Date();

export default function RevenueChart({className}: {className?: string}) {
    return (
        <div className={cn("h-full flex flex-col gap-2", className)}>
            <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-foreground">Revenue</h3>
                <div className="flex gap-x-2">
                    <Select
                        labelPlacement="outside"
                        className="w-36"
                        placeholder="Select month"
                        aria-label="Month"
                        defaultSelectedKeys={[months[now.getMonth()]]}
                    >
                        {months.map((month) => (
                            <SelectItem key={month} value={month} aria-label={month}>
                                {month}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        labelPlacement="outside"
                        className="w-36"
                        placeholder="Select year"
                        defaultSelectedKeys={[now.getFullYear().toString()]}
                        aria-label="Year"
                    >
                        {years.map((year) => (
                            <SelectItem key={year} value={year} aria-label={year}>
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