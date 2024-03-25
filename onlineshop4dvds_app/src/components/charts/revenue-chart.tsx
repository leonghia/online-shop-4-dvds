import { Select, SelectItem, cn } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Props } from "react-apexcharts";
import dynamic from 'next/dynamic'
import { Revenue } from "@/models/revenue";
import { API_URL } from "@/config";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = ["2022", "2023", "2024"];
const now = new Date();

const options: Props["options"] = {
    chart: {
        type: "area",
        animations: {
            easing: "linear",
            speed: 300,
        },
        sparkline: {
            enabled: false,
        },
        brush: {
            enabled: false,
        },
        id: "basic-bar",
        foreColor: "hsl(var(--nextui-default-800))",
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    colors: ["#22c55e"],
    dataLabels: { enabled: false },
    xaxis: {
        labels: {
            // show: false,
            style: {
                colors: "hsl(var(--nextui-default-800))",
            },

        },
        axisBorder: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
        axisTicks: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
        type: "datetime"
    },
    yaxis: {
        labels: {
            style: {
                // hsl(var(--nextui-content1-foreground))
                colors: "hsl(var(--nextui-default-800))",
            },
            formatter: function (value) {
                return "$" + value.toFixed(2);
            }
        },
    },
    tooltip: {
        enabled: true,
        y: {
            title: {formatter: (seriesName: string) => "Total:"}
        },
        x: {
            formatter: (val) => new Date(val).toLocaleDateString("vi-VN")
        }
    },
    grid: {
        show: true,
        borderColor: "hsl(var(--nextui-default-200))",
        strokeDashArray: 0,
        position: "back",
    },
    stroke: {
        curve: "smooth",
        fill: {
            colors: ["red"],
        },
    },
    // @ts-ignore
};

export default function RevenueChart({ className }: { className?: string }) {
    const [series, setSeries] = useState<Props["series"]>(undefined);

    useEffect(() => {
        fetch(`${API_URL}/revenue?month=${now.getMonth() + 1}&year=${now.getFullYear()}`)
            .then(res => res.json())
            .then((revenues: Revenue[]) => setSeries([{ data: revenues.map(r => ({ x: new Date(r.date).getTime(), y: r.revenue })) }]))
            .catch(err => console.error(err));
    }, []);

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
                <div className="w-full z-20">
                    <div id="chart">
                        {series && <Chart options={options} series={series} height={425} type="area" />}
                    </div>
                </div>
            </div>
        </div>
    );
}