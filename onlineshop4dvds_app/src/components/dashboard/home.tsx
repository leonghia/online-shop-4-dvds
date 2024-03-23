import React from "react";
import { cn } from "@nextui-org/react";
import RevenueChart from "../charts/revenue-chart";
import TransactionsCard from "./transactions-card";

export default function Home({className}: {className?: string}) {
  return (
    <div className={cn("h-full", className)}>
      <div className="flex justify-center flex-wrap xl:flex-nowrap w-full">
        <div className="flex w-full gap-x-8">
          <RevenueChart className="w-2/3" />
          <TransactionsCard className="grow" />
        </div>
      </div>
    </div>
  );
}