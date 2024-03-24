import React from "react";
import { cn } from "@nextui-org/react";
import RevenueChart from "../charts/revenue-chart";
import TransactionsCard from "./transactions-card";
import QuickActions from "./quick-actions";
import TopSelling from "./top-selling";

export default function Home({ className }: { className?: string }) {
  return (
    <div className={cn("h-full space-y-10", className)}>
      <div className="flex w-full gap-x-8">
        <RevenueChart className="w-2/3" />
        <TransactionsCard className="grow" />
      </div>
      <div className="flex w-full gap-x-8">
        <TopSelling className="basis-2/5 h-auto" />
        <RevenueChart className="basis-3/5" />
      </div>
      <QuickActions />
    </div>
  );
}