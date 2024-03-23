import React from "react";
import dynamic from "next/dynamic";
import { cn } from "@nextui-org/react";

const Chart = dynamic(
  () => import("./charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export default function Dashboard({className}: {className?: string}) {
  return (
    <div className={cn("h-full", className)}>
      <div className="flex justify-center flex-wrap xl:flex-nowrap w-full">
        <div className="flex flex-col w-full">
          <div className="h-full flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-primary">Statistics</h3>
            <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
              <Chart />
            </div>
          </div>
        </div>


      </div>


    </div>
  );
}