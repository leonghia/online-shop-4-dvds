import React from "react";
import { cn } from "@nextui-org/react";
import RevenueChart from "../charts/revenue-chart";
import TransactionsCard from "./transactions-card";
import QuickActions from "./quick-actions";

export default function Home({ className }: { className?: string }) {
  return (
    <div className={cn("h-full space-y-10", className)}>
      <div className="flex w-full gap-x-8">
        <RevenueChart className="w-2/3" />
        <TransactionsCard className="grow" />
      </div>
      <QuickActions />
    </div>
  );
}