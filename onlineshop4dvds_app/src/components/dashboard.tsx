import React from "react";
import { cn } from "@nextui-org/react";
import RevenueChart from "./charts/revenue-chart";

export default function Dashboard({className}: {className?: string}) {
  return (
    <div className={cn("h-full", className)}>
      <div className="flex justify-center flex-wrap xl:flex-nowrap w-full">
        <div className="flex w-full gap-x-8">
          <RevenueChart className="w-3/5" />
          <RevenueChart className="w-2/5" />
        </div>
      </div>
    </div>
  );
}